const mongoose = require('mongoose');

const contactusschema = new mongoose.Schema({
    name: String,
    subject: String,
    email:String,
    phonenumber: String, 
    message: String,
   
});

module.exports = mongoose.model('Contactus', contactusschema);
