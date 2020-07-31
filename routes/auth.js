// const express = require('express');
// const router = express.Router();
// const authUtils = require('../utilities/auth');
// const passport = require('passport');

// router.get('/login', (req, res, next)=>{
//     const messages = req.flash();
//     res.render('agentlogin',{messages});
// });

// router.get('/login', (req, res, next)=>{
//     const messages = req.flash();
//     res.render('managerlogin',{messages});
// });

// router.post('/login', passport.authenticate('local',{failureRedirect:'/auth/login', failureFlash:'wrong username or password'}),
// (req, res, next)=>{
//     res.redirect('/users');
// });

// router.get('/reg',(req, res, next)=>{
//     const messages =req.flash();
//     res.render('registration', {messages});
// });

// router.post('/reg',(req, res, next)=>{
//     const registrationParams = req.body;
//     const users = req.app.locals.users;
//     const payload ={
//         username: registrationParams.username,
//         password: authUtils.hashPassword(registrationParams.password),
//     }

//     users.insertOne(payload, (err) =>{
//         if (err){
//             req.flash('error','User account already exists')
//         }else{
//             req.flash('success', 'User account was registered successfully')
//         }

//         res.redirect('/auth/reg');
//     });
// });

// router.get('/logout', (req,res, next)=>{
//     req.session.destroy();
//     res.redirect('/')
// });

// module.exports = router;
