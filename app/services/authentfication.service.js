// use the findUser on user.service and authenticate user by email and passwrod

const userService = require('../services/user.service');
 
async function authenticateUser(email, password) {
     try {
         const user = await userService.findUserByEmail(email);
         if (user && user.password === password) {
             return user;
         }
     } catch (error) {
         console.error('Error authenticating user:', error);
         throw error;
     }
}

 
module.exports = {
    authenticateUser
};