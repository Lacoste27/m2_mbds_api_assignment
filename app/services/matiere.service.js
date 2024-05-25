const { ObjectId } = require("mongodb");
const Matiere = require("../models/matiere.model");

async function findAll(page, limit){
    try {
        let aggregateQuery = Matiere.aggregate();
    
        const list = await Matiere.aggregatePaginate(aggregateQuery, {
          page: page,
          limit: limit,
        });
        return list;
      } catch (error) {
        console.error("Error finding", error);
        throw error;
      }
}

module.exports = {
    findAll
}