const mongoose = require('mongoose');


const purchaseschema = new mongoose.Schema({
    customerName: String,
    location: String,
    tel: String,
    emailAdress: String,
    NINno: String,
    itemName: String,
    serialNo: String, 
    initialpay: String,
    nextPay: String,
    nextAmount: String,
    refNo:String,
   
});


module.exports = mongoose.model('Purchase', purchaseschema);