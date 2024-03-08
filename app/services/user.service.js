const User = require('../models/user.model'); // Assuming you have a User model defined

async function findUserByEmail(email) {
    try {
        
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }   
}

// find user by id with mongoose model
async function findUserById(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }
}

// find all user find with mongoose model
async function findAllUser(page, limit) {
    try {
        let aggregateQuery = User.aggregate();

        const list = await  User.aggregatePaginate(
            aggregateQuery, 
            {
                page: page,
                limit: limit
            }
        );

        return list;
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }
}

module.exports = {
    findUserByEmail,
    findUserById,
    findAllUser
};