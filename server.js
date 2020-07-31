
const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require ('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
// const Strategy = require('passport-local').Strategy;
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false
});
require('dotenv').config();
const flash = require('connect-flash');

const app = express();

const register = require('./models/registration_model');



//importing Stake holders Routes
const managerRoutes = require('./routes/managerRoutes');
const salesAgentsRoutes = require('./routes/salesAgentsRoutes');
const customersRoutes = require('./routes/customersRoutes');
const loginRoutes = require('./routes/loginRoutes');


// const authUtils = require('./utilities/auth');
// const authRouter = require('./routes/auth');
// const {MongoClient} = require('mongodb');
// const { purge } = require('./routes/managerRoutes');


//pug engine
app.set('view engine', 'pug');
app.set('views', './views');

//HTML views
var view = "./views/"


// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// To parse json data
app.use(bodyParser.json());
// app.use(expresss.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(register.createStrategy());
passport.serializeUser(register.serializeUser());
passport.deserializeUser(register.deserializeUser());

//using the imported Routes
app.use('/', customersRoutes);
app.use('/manager', managerRoutes);
app.use('/agent', salesAgentsRoutes);

//db
// mongoose.connect(process.env.DATABASE, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// mongoose.connection
//   .on('open', () => {
//     console.log('Mongoose connection is now open');
//   })
//   .on('error', (err) => {
//     console.log(`Connection error: ${err.message}`);
//   });


// MongoClient.connect('mongodb://localhost',(err, client) =>{
//   if (err) {
//     throw err;
//   }

//   const db = client.db('user-profile');
//   const users =db.collection('users');
//   app.locals.users = users;
// });

// passport.use(new Strategy(
//   (username, password, done)=>{
//     app.locals.users.findOne({username}, (err,user)=>{
//       if (err) {
//         return done(err);
//       }

//       if(!user){
//         return done(null, false);
//       }
//       if(user.passport != authUtils.hashPassword(password)){
//         return done(null, false);
//       }
//       return done(null, user);
//     })
//   }));

  // passport.serializeUser((user, done)=>{
  //   done(null, user._id);
  // });

  // passport.deserializeUser((id, done)=> {
  //   done(null, {id});
  // })

// mongoose
mongoose.connect(process.env.DATABASE,
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
  }
);
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.log(`Connection error: ${err.message}`);
  });

// mongoose.connection
//   .on("open", () => {
//     console.log("Mongoose connection open");
//   })
//   .on("error", err => {
//     console.log(`Connection error: ${err.message}`);
//   });


// app.use(express-session());
// app.use(session({
//   secret: 'session secret',
//   resave: false,
//   saveUninitialized: false,

// app.use('/auth', authRouter);

/* PASSPORT LOCAL AUTHENTICATION */



// /* ROUTES */
// app.post('/login', (req, res, next) => {
//   passport.authenticate('local',
//   (err, user, info) => {
//     if (err) {
//       return next(err);
//     }

//     if (!user) {
//       return res.redirect('/login?info=' + info);
//     }

//     req.logIn(user, function(err) {
//       if (err) {
//         return next(err);
//       }

//       return res.redirect('/');
//     });

//   })(req, res, next);
// });

// app.get('/login',
//   (req, res) => res.sendFile('html/login.html',
//   { root: __dirname })
// );

// app.get('/',
//   connectEnsureLogin.ensureLoggedIn(),
//   (req, res) => res.sendFile('html/index.html', {root: __dirname})
// );

// app.get('/private',
//   connectEnsureLogin.ensureLoggedIn(),
//   (req, res) => res.sendFile('html/private.html', {root: __dirname})
// );

// app.get('/user',
//   connectEnsureLogin.ensureLoggedIn(),
//   (req, res) => res.send({user: req.user})
// );
// Simple request time logger
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});



// For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});


//start listening to the server
app.listen(3000, function() {
    console.log('listening to your code on 3000')
  })