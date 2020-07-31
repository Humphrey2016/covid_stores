const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
  
const regschema = new mongoose.Schema({
    fullname: String,
    emailaddress: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String, 
    repassword: String,
    permanentaddress: String,
    EMPnumber: String,
    NINnumber: String,
   
});
regschema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Registration', regschema);