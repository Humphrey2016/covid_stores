const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
require("../models/registration_model");
const Registration = mongoose.model("Registration");


var view = "./views/"

router.get('/reg', (req, res) => {
    res.render("registration");
});

// router.post("/reg", async (req, res) => {
//   try {
//     const items = new Registration(req.body);
//     await Registration.register(items, req.body.password, err => {
//       if (err) {
//         throw err;
//       }
//       // res.redirect("/login");
//     });
//   } catch (err) {
//     res.status(400).send("Sorry! Something went wrong.");
//     console.log(err);
//   }
// });

router.post("/reg", async (req, res) => {
  // console.log(req.body);
  const registration = new Registration(req.body);
  try {
    await registration.save();
    res.send("Thank you for your registration!");
    // res.redirect("/login");
  } catch (err) {
    console.log(err);
    res.send("Sorry! Something went wrong.");
  }
});


router.get('/login', (req, res) => {
  res.sendFile("login.html", { root: view });
});

module.exports=router;


// const express = require('express');

// const router = express.Router();

// router.get('/reg',(req,res)=>{
//     res.sendFile('registration-form.html',{root:'views'})
// })

// module.exports = router