const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
require("../models/contactusmodel");
const Contactus = mongoose.model("Contactus");
//rendering views
var view = "./views/"

router.get('/aboutUs', (req, res) => {
    res.sendFile("about_us.html", { root: view});
});


router.get('/list', (req, res) => {
    res.render("userlist");
});

router.get('/add', (req, res) => {
    res.sendFile("add-product.html", { root: view});
});

router.get('/agentadd', (req, res) => {
    res.sendFile("addAgent.html", { root: view});
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
    res.render("contactus");
});


//contact-us us route
router.get('/contactus', (req, res) => {
    res.render("contactus");
});

//posting a contact-us page to the browser
router.post("/contactus", async (req, res) => {
    // console.log(req.body);
    const contactus = new Contactus(req.body);
    try {
      await contactus.save();
      res.send("Thank you for contacting us we will review your message and get back to us soon as possible!");
      
    } catch (err) {
      console.log(err);
      res.send("Sorry! Something went wrong.");
    }res.redirect('/');
  });
module.exports=router;


