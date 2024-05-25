// create a user model with mongoose with role is admin or student
const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const matiereSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    nom: {
        type: String,
        required: true
    },
    coefficient: {
        type: Number,
        required: true
    },
    professeur: {
        type: Object,
        required: true
    },
    image: {
        type: String,
        required: true
    }
    
});

matiereSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Matiere', matiereSchema);
