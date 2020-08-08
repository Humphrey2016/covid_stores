//requiring and declaring variables
const express=require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')
require('../models/managerRegistration_model');
const ManagerRegistration = mongoose.model("ManagerRegistration");

var view = "./views/"

//getting the manager registrationm page and setting a route for it
router.get('/managerReg', (req, res) => {
  res.render("managerRegistration");
});

//posting the manager registration page to the browser
router.post("/managerReg", async (req, res) => {
// console.log(req.body);

try {
  const Manager = new ManagerRegistration(req.body);
  await ManagerRegistration.register(Manager, req.body.password, err =>{
    if (err){
      throw err
    }
    res.redirect('/manager/managerlogin');
  }); 
} catch (err) {
  console.log(err);
  res.send("Sorry! Something went wrong.");
}
});

//getting the login page of the manager and setting its route
router.get('/managerlogin', (req, res) => {
  res.render("managerlogin");
});

//posting the manager login page to the browser
router.post('/managerlogin', passport.authenticate('local'), (req, res) => {
  //capture user's session
  req.session.user = req.user;
  //redirecting to index page
  res.redirect('/')
});

module.exports=router;