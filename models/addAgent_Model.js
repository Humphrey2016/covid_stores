const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const addAgentschema = new mongoose.Schema({
    Fname: String,
    lname: String,
    emailAddress: String,
    age: Number,
    phoneNumnber: Number,
    EMPnumber: String, 
    NINnumber: String,
   
});
addAgentschema.plugin(passportLocalMongoose);

module.exports = mongoose.model('addAgent',addAgentschema);