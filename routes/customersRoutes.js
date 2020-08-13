const express=require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../models/contactusmodel");
const Contactus = mongoose.model("Contactus");
//rendering views
var view = "./views/"

router.get('/aboutUs', (req, res) => {
    res.sendFile("about_us.html", { root: view});
});

router.get('/ourpolicy', (req, res) => {
    res.sendFile("ourpolicy.html", { root: view});
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

router.get('/TVsets', (req, res) => {
    res.sendFile("TVsets.html", { root: view});
});

router.get('/others', (req, res) => {
    res.sendFile("otherCollection.html", { root: view});
});


//contact-us us route
router.get('/contactus', (req, res) => {
    res.render("contactus");
});

router.post('/contactus', async (req, res) => {
    console.log(req.file);
    const contactus = new Contactus({
        name: req.body.name,        
        subject: req.body.subject,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        message: req.body.message,

    });
    try {
        await contactus.save();
        console.log(req.body);        
        res.redirect('/')
    } catch (err) {
        res.send('Sorry! Something went wrong.')
        console.log(err)
    }
});

//posting a contact-us page to the browser
// router.post("/contactus", async (req, res) => {
//     // console.log(req.body);
//     const contactus = new Contactus(req.body);
//     try {
//       await contactus.save();
//       res.send("Thank you for contacting us we will review your message and get back to us soon as possible!");
      
//     } catch (err) {
//       console.log(err);
//       res.send("Sorry! Something went wrong.");
//     }res.redirect('/');
//   });
module.exports=router;


