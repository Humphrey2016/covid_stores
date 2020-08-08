const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
 
const managerRegistrationschema = new mongoose.Schema({
    fullname: String,
    emailaddress: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String, 
    repassword: String,
    EMPnumber: String,
    NINnumber: String
   
});
managerRegistrationschema.plugin(passportLocalMongoose);

module.exports = mongoose.model('ManagerRegistration', managerRegistrationschema);