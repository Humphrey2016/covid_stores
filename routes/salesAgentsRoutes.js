//requiring and declaring variables
const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
const passport = require('passport')
require('../models/agentRegistration_model');
const agentRegistration = mongoose.model("agentRegistration");

var view = "./views/"

//geting the agent Registration route
router.get('/agentReg', (req, res) => {
  res.render("agentRegistration");
});

//posting the agent registration onto the browser
router.post("/agentReg", async (req, res) => {
// console.log(req.body);
const items = new agentRegistration(req.body);
try {
  await agentRegistration.register(items, req.body.password, err =>{
    if (err){
      throw err
    }
    res.redirect('/agent/agentlogin');
  }); 
} catch (err) {
  console.log(err);
  res.send("Sorry! Something went wrong.");
}
});

//getting the agent loging page with a route
router.get('/agentlogin', (req, res) => {
  res.render("agentlogin");
  });

  //posting the login page onto the browser
router.post('/agentlogin', passport.authenticate('local'), (req, res) => {
  //capture user's session
  req.session.user = req.user;
  // redirecting to the index page
res.redirect('/')
});


module.exports=router;

