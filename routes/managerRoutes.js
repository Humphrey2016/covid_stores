//requiring and declaring variables
const express=require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const passport = require('passport')
require('../models/managerRegistration_model');
require('../models/addItemModel');
const ManagerRegistration = mongoose.model("ManagerRegistration");
const AddItem = mongoose.model('AddItem');

// uploading image
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

const upload = multer({
  storage: storage
})

var view = "./views/"

//manager's dash board route
router.get('/managerDash', (req, res) => {
  res.sendFile("managerDash.html", { root: view});
});

//getting the manager registrationm page and setting a route for it
router.get('/managerReg', (req, res) => {
  res.render("managerRegistration");
});

//posting the manager registration page to the browser
router.post("/managerReg", async (req, res) => {
// console.log(req.body);

try {
  const Manager = new ManagerRegistration({
    fullname: req.body.fullname,
    emailaddress: req.body.emailaddress,
    username: req.body.username,
    password: req.body.password,
    repassword: req.body.repassword,
    EMPnumber: req.body.EMPnumber,
    NINnumber: req.body.NINnumber,
  });
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


//getting the agents list
router.get('/managerList', async(req, res) => {
  const items = await ManagerRegistration.find()
  res.render("managerList", {
    itemLists: items
  });
});

//lists Delete route
router.post('/delete', async (req, res) => {
  try {
      await ManagerRegistration.deleteOne({
          _id: req.body.id
      })
      res.redirect("back")
  } catch (error) {
      res.status(400).send("Unable to delete selected item")
  }
})

//getting the login page of the manager and setting its route
router.get('/managerlogin', (req, res) => {
  res.render("managerlogin");
});

//posting the manager login page to the browser
router.post('/managerlogin', passport.authenticate('manager-local'), (req, res) => {
  //capture user's session
  req.session.user = req.user;
  //redirecting to index page
  res.redirect('/')
});


//getting the added items to display in the browser
router.get('/addItem', (req, res) => {
  res.sendFile("add-product.html", { root: view});
});

router.post('/manager/addItem', upload.single('itemPhoto'), async (req, res) => {
  console.log(req.file);
  const addItem = new AddItem({
    itemName: req.body.itemName,
      itemMake: req.body.itemMake,
      date: req.body.date,
      category: req.body.category,
      serialNumber: req.body.serialNumber,
      price: req.body.price,
      itemColor: req.body.itemColor,
      itemDesc: req.body.itemDesc,
      //numberStock: req.body.numberStock,
      itemPhoto: req.file.path
  });
  try {
      await addItem.save();
      console.log(req.body);
      res.redirect('/manager/addItem')
  } catch (err) {
      res.send('Sorry! Something went wrong.')
      console.log(err)
  }
});

//route for getting item lists
router.get('/itemLists', async(req, res) => {
  const items = await AddItem.find()
  res.render("itemLists", {
    itemLists: items
  });
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
})



module.exports=router;