const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');

var view = "./views/"

router.get('/', (req, res) => {
    res.sendFile("index.html", { root: view });
});

router.get('/login', (req, res) => {
  res.render("agentlogin");
});

// router.post("/login", async (req, res) => {
//   // console.log(req.body);
//   const login = new Login(req.body);
//   try {
//     await login.save();
//     res.send("Thank you for loging in!");
//     res.redirect("/login");
//   } catch (err) {
//     console.log(err);
//     res.send("Sorry! Something went wrong.");
//   }
// });



module.exports=router;

