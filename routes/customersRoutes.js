const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
require("../models/contactusmodel");
const Contactus = mongoose.model("Contactus");


var view = "./views/"

router.get('/', (req, res) => {
    res.sendFile("index.html", { root: view });
});

router.get('/TVsets', (req, res) => {
    res.sendFile("TVsets.html", { root: view});
});

router.get('/home-theater', (req, res) => {
    res.sendFile("home-theater.html", { root: view});
});

router.get('/machinery', (req, res) => {
    res.sendFile("machinery.html", { root: view});
});

router.get('/fitness-kits', (req, res) => {
    res.sendFile("fitness-kits.html", { root: view});
});

router.get('/kids', (req, res) => {
    res.sendFile("kids.html", { root: view});
});

router.get('/funiture', (req, res) => {
    res.sendFile("funiture.html", { root: view});
});

router.get('/others', (req, res) => {
    res.sendFile("otherCollection.html", { root: view});
});

router.get('/contact', (req, res) => {
    res.sendFile("contact-us.html", { root: view});
});



router.get('/contactus', (req, res) => {
    res.render("contactus");
});

router.post("/contactus", async (req, res) => {
    // console.log(req.body);
    const contactus = new Contactus(req.body);
    try {
      await contactus.save();
      res.send("Thank you for contacting us we will review your message and get back to us soon as possible!");
      res.redirect('/');
    } catch (err) {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    }
  });
module.exports=router;


