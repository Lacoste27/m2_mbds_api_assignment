const userService = require('../services/user.service');
const authenticationService = require('../services/authentfication.service');

async function authenticateUser(request, response) {
    const { email, password } = request.body;
    try {
        const user = await authenticationService.authenticateUser(email, password);
        if (user) {
            const token = await authenticationService.generateToken(user);
            // extract name, firstname, role on user object and store it in a new object
            const { name, firstname, role } = user;
            const infouser = { name, firstname, role };

            response.json({user: infouser, token});
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