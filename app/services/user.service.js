const Assignment = require("../models/assignment.model");
const User = require("../models/user.model");

async function findUserByEmail(email) {
  try {
    const user = await User.findOne({ email: email });

    return user;
  } catch (error) {
    console.error("Error finding user", error);
    throw error;
  }
}

async function findUserById(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error("Error finding user", error);
    throw error;
  }
}

async function findAllUser(page, limit) {
  try {
    let aggregateQuery = User.aggregate();

    const list = await User.aggregatePaginate(aggregateQuery, {
      page: page,
      limit: limit,
    });

    return list;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
}

async function findStudentAssignment(page, limit, student_id) {
  try {
    /*let aggregateQuery = User.aggregate();

        const list = await User.aggregatePaginate(
            aggregateQuery,
            {
                page: page,
                limit: limit
            }
        );*/

    const list = Assignment.find({ "etudiant._id": student_id });

    return list;
  } catch (error) {
    console.error("Error finding student assignments", error);
    throw error;
  }
}

async function findTeacherAssignment(page, limit, teacher_id) {
  try {
    /*let aggregateQuery = User.aggregate();

        const list = await User.aggregatePaginate(
            aggregateQuery,
            {
                page: page,
                limit: limit
            }
        );*/

    const filter = { "matiere.professeur._id": "e03c5434-4594-4a1b-8fb8-961faecd859e" };

    const list = Assignment.find(filter);

    return list;
  } catch (error) {
    console.error("Error finding teacher assignments", error);
    throw error;
  }
}

async function findAllStudent(page, limit){
  try {
    let aggregateQuery = User.aggregate().match({"role": "etudiant"});

    const list = await User.aggregatePaginate(aggregateQuery, {
      page: page,
      limit: limit,
    });

    return list;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
}

module.exports = {
  findUserByEmail,
  findUserById,
  findAllUser,
  findStudentAssignment,
  findTeacherAssignment,
  findAllStudent
};
