const express=require('express');
const router=express.Router();

var view = "./views/"

router.get('/', (req, res) => {
    res.sendFile("index.html", { root: view });
});

router.get('/kids', (req, res) => {
    res.sendFile("kids.html", { root: view});
});

router.get('/ladies', (req, res) => {
    res.sendFile("ladies-collections.html", { root: view});
});

router.get('/gents', (req, res) => {
    res.sendFile("men-collections.html", { root: view});
});

router.get('/food', (req, res) => {
    res.sendFile("Food-staff.html", { root: view});
});

router.get('/kids', (req, res) => {
    res.sendFile("kids.html", { root: view});
});

router.get('/house', (req, res) => {
    res.sendFile("house-hold.html", { root: view});
});

router.get('/others', (req, res) => {
    res.sendFile("otherCollection.html", { root: view});
});

router.get('/contact', (req, res) => {
    res.sendFile("contact-us.html", { root: view});
});


module.exports=router;



// const express = require('express');

// const router = express.Router();


// router.get('/nav',(req,res)=>{
//     res.sendFile('nav.html',{root:'views/includes'})
// });

// router.get('/',(req,res)=>{
//     res.sendFile('index.html',{root:'views'})
// });

// router.get('/contact',(req,res)=>{
//     res.sendFile('contact-us',{root:'views'})
// });
// module.exports = router