// create a user model with mongoose with role is admin or student
const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const assignmentSchema = new Schema({
    _id: {
        type: String,
        required: true,
        default: uuidv4
    },
    nom: {
        type: String,
        required: true
    },
    dateRendu: {
        type: Date,
        required: true
    },
    rendu: {
        type: Boolean,
        required: true
    },
    note: {
        type: Number
    },
    remarque: {
        type: String,
        required: false,
        default: ''
    },
    etudiant: {
        type: Object,
        required: true
    },
    matiere: {
        type: Object,
        required: true
    },
});

assignmentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Assignment', assignmentSchema);
