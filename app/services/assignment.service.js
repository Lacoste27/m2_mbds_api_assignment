const Assignment = require("../models/assignment.model");

async function findAll(page, limit) {
    try {
        let aggregateQuery = Assignment.aggregate();

        const list = await  Assignment.aggregatePaginate(
            aggregateQuery, 
            {
                page: page,
                limit: limit
            }
        );
        return list;
    } catch (error) {
        console.error('Error finding', error);
        throw error;
    }   
}

module.exports = {
    findAll
};