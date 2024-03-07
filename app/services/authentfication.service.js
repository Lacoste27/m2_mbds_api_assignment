require('dotenv').config();
const jwt = require('jsonwebtoken');

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

async function generateToken(user) {
    const secretKey = process.env.SECRET_KEY;

    const payload = {
        id: user.id,
        email: user.email,
        role: user.role
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); 

    return token;
}



module.exports = {
    authenticateUser,
    generateToken
};