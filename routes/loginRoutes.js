const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


router.get('/login', (req, res) => {
    res.render("login");
  });
  
  // router.post("/login", async (req, res) => {
  //   // console.log(req.body);
  //   const login = new Login(req.body);
  //   try {
  //     await login.save();
  //     // res.send("Thank you for loging in!");
  //     res.redirect("/");
  //   } catch (err) {
  //     console.log(err);
  //     res.send("Sorry! Something went wrong.");
  //   }
  // });
  
  
  module.exports=router;