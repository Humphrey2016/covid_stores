const mongoose = require('mongoose');
const regschema = new mongoose.Schema({
    fullname: String,
    emailaddress: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: String, 
    presentaddress: String,
    permanentaddress: String,
    NINnumber: String,
   
});

module.exports = mongoose.model('Registration', regschema);