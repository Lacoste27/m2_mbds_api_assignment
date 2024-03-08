// create a user model with mongoose with role is admin or student
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-aggregate-paginate-v2');

const userSchema = new Schema({
    avatar: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'etudiant', 'professeur'],
        default: 'etudiant'
    }
});

userSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', userSchema);
