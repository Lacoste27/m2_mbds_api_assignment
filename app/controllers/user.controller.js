const userService = require('../services/user.service');

async function getUserById(request, response ) {
    const userid = request.params.id;

    try{
        const user = await userService.findUserById(userid);
        if(user){
            return response.json(user);
        } else {
            return response.status(404).json({ message: 'User not found' });
        }

    }catch(error){
        console.error('Error on get user by id', error);
        response.status(500).json({ message: 'Internal server error' });
    }
}

async function getAllUser(request, response) {
    try{
        var page = parseInt(request.query.page) || 1;
        var limit = parseInt(request.query.limit) || 10;

        const user = await userService.findAllUser(page, limit);
        return response.json(user);
    }catch(error){
        console.error('Error on get all user', error);
        response.status(500).json({ message: 'Internal server error' });
    }
}   

module.exports = {
    getUserById,
    getAllUser
}