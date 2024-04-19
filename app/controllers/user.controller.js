require("dotenv").config();
const userService = require("../services/user.service");
const assignmentService = require("../services/assignment.service");
const jwt = require("jsonwebtoken");
const { getUserOnToken } = require("../utils/utils");

async function getUserById(request, response) {
  const userid = request.params.id;

  try {
    const user = await userService.findUserById(userid);
    if (user) {
      return response.json(user);
    } else {
      return response.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error on get user by id", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

async function getAllUser(request, response) {
  try {
    var page = parseInt(request.query.page) || 1;
    var limit = parseInt(request.query.limit) || 10;

    const user = await userService.findAllUser(page, limit);
    return response.json(user);
  } catch (error) {
    console.error("Error on get all user", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

async function getUserAssignment(request, response) {
  try {
    let userid = request.params.id;
    const bearerHeader = request.headers["authorization"];

    const user = await getUserOnToken(bearerHeader);

    if (user.id != userid && user.role != "administrateur") {
      return response.status(403).json({ message: "Forbidden" });
    } else if (user.id === userid) {
      if (user.role === "etudiant") {

        const assignments = await userService.findStudentAssignment(userid);
        return response.json(assignments);
      } else if (user.role === "professeur") {
        const assignments = await userService.findTeacherAssignment(userid);

        return response.json(assignments);
      }
    }

    return response.json("ssd");

    /*if (typeof bearerHeader !== "undefined") {
      const bearer = bearerHeader.split(" ");
      const token = bearer[1];

      const verify = jwt.verify(token, SECRET_TOKEN, async (error, user) => {

        if (user) {
          if (user.role === "etudiant") {
            const assignments = await userService.findStudentAssignment(userid);
            
            return response.json(assignments);
          } else if (user.role === "professeur") {
            const assignments = await userService.findTeacherAssignment(userid);

            return response.json(assignments);
          } else if(user.role === "administrateur") {
            const assignments = await assignmentService.findAll();
            return response.json(assignments);
          }
        } else {
            response.status(403).json({ message: "Forbidden" });
        }
      });
    } else {
      response.status(403).json({ message: "Forbidden" });
    }*/
  } catch (error) {
    console.error("Error on get all user", error);
    response.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {
  getUserById,
  getAllUser,
  getUserAssignment,
};
