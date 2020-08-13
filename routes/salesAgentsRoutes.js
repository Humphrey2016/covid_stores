//requiring and declaring variables
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport')
require('../models/agentRegistration_model');
require('../models/purchaseModel')
const agentRegistration = mongoose.model("agentRegistration");
const Purchase = mongoose.model("Purchase")
var view = "./views/"

//geting the agent Registration route
router.get('/agentReg', (req, res) => {
  res.render("agentRegistration");
});

//posting the agent registration onto the browser
router.post("/agentReg", async (req, res) => {
  // console.log(req.body);
  const items = new agentRegistration({
    fullname: req.body.fullname,
    emailaddress: req.body.emailaddress,
    username: req.body.username,
    password: req.body.password,
    repassword: req.body.repassword,
    EMPnumber: req.body.EMPnumber,
    NINnumber: req.body.NINnumber,
  });
  try {
    await agentRegistration.register(items, req.body.password, err => {
      if (err) {
        throw err
      }
      res.redirect('/agent/agentlogin');
    });
  } catch (err) {
    console.log(err);
    res.send("Sorry! Something went wrong.");
  }
});


//getting the agents list
router.get('/salesAgentList', async(req, res) => {
  const items = await agentRegistration.find()
  res.render("agentList", {
    itemLists: items
  });
});

//lists Delete route
router.post('/delete', async (req, res) => {
  try {
      await agentRegistration.deleteOne({
          _id: req.body.id
      })
      res.redirect("back")
  } catch (error) {
      res.status(400).send("Unable to delete selected item")
  }
})

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


//route for getting purchase details
router.get('/purchase', (req, res) => {
  res.render("purchasedetails");
});

// //route for getting purchase list
// router.get('/purchaseList', (req, res) => {
//   res.render("purchaseList");
// });

//getting the item list
router.get('/itemLists', async(req, res) => {
  const items = await Purchase.find()
  res.render("purchaseList", {
    itemLists: items
  });
});


//route for posting purchases in the data base
router.post('/purchase', async (req, res) => {
  console.log(req.file);
  const purchase = new Purchase({
    customerName: req.body.customerName,
    location: req.body.location,
    tel: req.body.tel,
    emailAdress: req.body.emailAdress,
    NINno: req.body.NINno,
    itemName: req.body.itemName,
    serialNo: req.body.serialNo,
    initialpay: req.body.initialpay,
    nextPay: req.body.nextPay,
    nextAmount: req.body.nextAmount,
    refNo: req.body.refNo,
  });
  try {
    await purchase.save();
    console.log(req.body);
    // res.redirect('/')
    res.send('thanks for the purchase')
  } catch (err) {
    res.send('Sorry! Something went wrong.')
    console.log(err)
  }
});
  

//lists Delete route
router.post('/delete', async (req, res) => {
  try {
      await AddItem.deleteOne({
          _id: req.body.id
      })
      res.redirect("back")
  } catch (error) {
      res.status(400).send("Unable to delete selected item")
  }
});

// Search route
router.get('/itemSearch', async (req, res) => {
    try {
        let items = await AddItem.find()
        if (req.query.itemName) {
            items = await AddItem.find({
                itemName: req.query.itemName
            })
        }
        res.render('itemlists', {
            itemlists: items
        })
    } catch (err) {
        res.status(400).send("unable to find items in the database");
    }
})


router.get('/agentDash', (req, res) => {
  res.sendFile("salesagentDash.html", {
    root: view
  });
});



module.exports = router;