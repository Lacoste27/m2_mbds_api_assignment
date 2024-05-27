const { ObjectId } = require("mongodb");
const Assignment = require("../models/assignment.model");

async function findAll(page, limit) {
  try {
    let aggregateQuery = Assignment.aggregate();

    const list = await Assignment.aggregatePaginate(aggregateQuery, {
      page: page,
      limit: limit,
    });
    return list;
  } catch (error) {
    console.error("Error finding", error);
    throw error;
  }
}


async function findById(assignment_id) {
  try {
    const assignment = Assignment.findOne({ _id: assignment_id });

    return assignment;
  } catch (error) {
    console.error("Error finding assignment", error);
    throw error;
  }
}

async function add(assignment) {
  try {
    return Assignment.insertMany(assignment);
  } catch (error) {
    console.error("Error on add", error);
    throw error;
  }
}

async function setIsRendu(id, note, remarque) {
  try {
    const assignment = await findById(id);

    if(!assignment){
        return;
    }
    
    assignment.note = note;
    assignment.rendu = true;
    assignment.remarque = remarque;

    const result = Assignment.findByIdAndUpdate(id, assignment, { new: true });


    return result;
  } catch (error) {
    console.error("Error on set is rendu", error);
    throw error;
  }
}

async function deleteAssignment(id){
    try {
        return Assignment.findByIdAndDelete(id)
    }catch(error){
        console.error("Error on delete", error);
        throw error;
    }
}

module.exports = {
  findAll,
  findById,
  add,
  setIsRendu,
  deleteAssignment
};
