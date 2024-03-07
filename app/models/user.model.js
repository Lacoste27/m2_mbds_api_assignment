// create a user model with mongoose with role is admin or student
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    firstname : {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'student', 'teacher'],
        default: 'student'
    }
});

module.exports = mongoose.model('User', userSchema);
