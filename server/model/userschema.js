const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    expiryDate: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

const User = mongoose.model('USER' , userSchema) ;

module.exports = User;