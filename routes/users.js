const express=require('express');
const router=express.Router();

router.get('/', (req, res, next)=>{
    if(!res.isAuthenticated()) {
        req.redirect('/auth/login');
    }
});

module.exports = router;
