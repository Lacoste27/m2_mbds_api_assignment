const matiereService = require('../services/matiere.service');

async function getAllMatiere(request, response){
    try {
        var page = parseInt(request.query.page) || 1;
        var limit = parseInt(request.query.limit) || 10;
    
        const matieres = await matiereService.findAll(page, limit);
    
        if (matieres) {
          return response.json(matieres);
        } else {
          return response.status(404).json({ message: "matieres not found" });
        }
      } catch (error) {
        console.error("Error all matieres", error);
        response.status(500).json({ message: "Internal server error" });
      }
}

module.exports = {
    getAllMatiere
}