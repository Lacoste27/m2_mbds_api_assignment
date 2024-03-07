const userService = require('../services/user.service');
const authenticationService = require('../services/authentfication.service');

async function authenticateUser(request, response) {
    const { email, password } = request.body;
    try {
        const user = await authenticationService.authenticateUser(email, password);
        if (user) {
            response.json(user);
        } else {
            response.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error authenticating user:', error);
        response.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    authenticateUser
}