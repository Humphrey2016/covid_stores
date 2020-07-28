const express=require('express');
const router=express.Router();

var view = "./views/"

router.get('/reg', (req, res) => {
    res.sendFile("registration-form.html", { root: view });
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