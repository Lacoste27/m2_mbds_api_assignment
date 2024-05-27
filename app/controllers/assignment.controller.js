const assignmentService = require("../services/assignment.service");

async function getAllAssignment(request, response) {
  try {
    var page = parseInt(request.query.page) || 1;
    var limit = parseInt(request.query.limit) || 10;

    const assignments = await assignmentService.findAll(page, limit);

    if (assignments) {
      return response.json(assignments);
    } else {
      return response.status(404).json({ message: "Assignments not found" });
    }
  } catch (error) {
    console.error("Error all assignments", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

async function getAssignmentById(request, response) {
  try {
    let id = request.params.id;

    const assignment = await assignmentService.findById(id);

    if (!assignment) {
      return response.status(404).json({ message: "Assignment not found" });
    } else {
      return response.json(assignment);
    }
  } catch (error) {
    console.error("Error get assignment by id ", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

async function addAssignment(request, response) {
  try {
    const assignment = request.body;

    const add = await assignmentService.add(assignment);

    return response.status(201).json({ message: "Assignment add", data: add });
  } catch (error) {
    console.error("Error on add assignment", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

async function setAssignmentRendu(request, response) {
  try {
    const id = request.params.id;
    const { remarque, note } = request.body;

    console.log(id, note, remarque);

    if(!id && !note || !note){
        return response.status(400).json({ message: "Veuillez mentionnez l'id , la note" });
    }

    const assignment = await assignmentService.setIsRendu(id, note, remarque);

    if(!assignment){
        return response.status(404).json({ message: "Assignment non trouvé" });
    }

    return response.json({ message: `Assignment ${assignment.nom} rendu avec la note de ${note} !` });
  } catch (error) {
    console.error("Error on update assignment", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

async function deleteAssignement(request, response) {
  try {
    let id = request.params.id;

    console.log("delete api "+id);

    const assignment = await assignmentService.deleteAssignment(id);

    if (!assignment) {
      return response.status(404).json({ message: "Assignment non trouvé" });
    }

    return response.json({ message: `Assignment ${assignment.nom} supprimé !` });
  } catch (error) {
    console.error("Error on delete assignment", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getAllAssignment,
  getAssignmentById,
  addAssignment,
  setAssignmentRendu,
  deleteAssignement,
};
