// create a user model with mongoose with role is admin or student
const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const assignmentSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    nom : {
        type: String,
        required: true
    },
    dateRendu : {
        type: Date,
        required: true
    },
    rendu : {
        type: Boolean,
        required: true
    },
    note : {
        type: Boolean,
        required: true
    },
    etudiant :{
        type: Object,
        required: true
    },
    matiere : {
        type: Object,
        required: true
    },
});

assignmentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Assignment', assignmentSchema);
