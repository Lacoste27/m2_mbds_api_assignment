
require('dotenv').config();
const jwt = require('jsonwebtoken');

async function authentificationMiddlware(request, response, next) {
    const SECRET_TOKEN = process.env.SECRET_KEY;

    try{
        const bearerHeader = request.headers['authorization'];

        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const token = bearer[1];
    
            const verify = jwt.verify(token, SECRET_TOKEN, (error, user) => {
                if(user){
                    request.user = user;
                    next();
                } else {
                    response.status(403).json({ message: 'Forbidden' });
                }
            });

        } else {
            response.status(403).json({ message: 'Forbidden' });
        }
    }catch(error){
        console.error('Error on authentification middleware', error);
        response.status(500).json({ message: 'Internal server error' });
    }
}   

module.exports = {
    authentificationMiddlware
};