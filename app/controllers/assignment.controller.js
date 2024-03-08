const assignmentService = require('../services/assignment.service');

async function getAllAssignment(request, response ) {

    try{
        var page = parseInt(request.query.page) || 1;
        var limit = parseInt(request.query.limit) || 10;

        const assignments = await assignmentService.findAll(page, limit);

        if(assignments){
            return response.json(assignments);
        } else {
            return response.status(404).json({ message: 'Assignments not found' });
        }

    }catch(error){
        console.error('Error all assignments', error);
        response.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getAllAssignment
}