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

module.exports = {
    getUserById
}