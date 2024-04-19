require("dotenv").config();
const jwt = require("jsonwebtoken");

async function getUserOnToken(header) {
  const SECRET_TOKEN = process.env.SECRET_KEY;

  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    let response;

    const verify = jwt.verify(token, SECRET_TOKEN, async (error, user) => {
        response = user;
    });

    return response;
  } else {
    return null;
  }
}

module.exports = {
  getUserOnToken,
};
