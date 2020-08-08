
//declaring and requiring middlewares
const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const mongodb =require('mongodb') 
const path = require('path');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs =require('fs')
const passport = require('passport');
const expressSession = require("express-session")({
  secret: "secret",
  resave: false,
  saveUninitialized: false
});
require('dotenv').config();
const app = express();
const managerRegister = require('./models/managerRegistration_model');
const agentRegister = require('./models/agentRegistration_model');


//importing Stake holders Routes
const managerRoutes = require('./routes/managerRoutes');
const salesAgentsRoutes = require('./routes/salesAgentsRoutes');
const customersRoutes = require('./routes/customersRoutes');
const { db } = require('./models/managerRegistration_model');

// mongoose connection
mongoose.connect(process.env.DATABASE,
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true

  }
);
mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection now open...");
  })
  .on("error", err => {
    console.log(`Connection error: ${err.message}`);
  });


//pug engine
app.set('view engine', 'pug');
app.set('views', './views');

// index Route
app.get('/upload',(req, res) => {
  res.render("index");
});


//rendering views
var view = "./views/"
//setting a path for the static files
app.use(express.static(path.join(__dirname, 'public')));
// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// To parse json data
app.use(bodyParser.json());



// Express session configs
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());


// Passport agentregistration configs
passport.use(managerRegister.createStrategy());
passport.serializeUser(managerRegister.serializeUser());
passport.deserializeUser(managerRegister.deserializeUser());

// Passport agentregistration configs
passport.use(agentRegister.createStrategy());
passport.serializeUser(agentRegister.serializeUser());
passport.deserializeUser(agentRegister.deserializeUser());

//using the imported Routes
app.use('/', customersRoutes);
app.use('/manager', managerRoutes);
app.use('/agent', salesAgentsRoutes);

//defining multer
var storage = multer.diskStorage({
  destination: function (req, file, callback){
    callback(null, 'uploads');
  },
  filename: function(req, file, callback){
    callback(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
  }
});

//creating an upload variable and asigning it to multer
var upload = multer({
  storage:storage
});

//config singe file
app.post('/uploadfile',upload.single('myFile'),(req, res, next)=>{
  const file = req.file;
  if(!file){
    //if there is an error
    const error = new Error("please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  //if no error
  res.send(file);
});

//config multiple files 
app.post("/uploadmultiple", upload.array('myFile',12),(req, res, next)=>{
  const files = req.files;
  if(!files){
    //if error
    const error = new Error("please choose files");

    error.httpStatusCode = 400;
    return next(error);
  }
  //no error
  res.send(files)
});

// configuring the image upload to the database
app.post("/uploadphoto",upload.single('myImage'),(req, res)=>{
  var img = fs.readFileSync(req.file.path);

  var encode_image = img.toString('base64');

//define a JSON Object for the image
  var finalImg = {
    contentType: req.file.mimetype,
    path:req.file.path,
    image:new Buffer(encode_image, 'base64')
  };
  //inser image to the database
  db.collection('image').insertOne(finalImg,(err, result) => {
    console.log(result);

    if(err) return console.log(err);

    console.log("saved to your dataBase no need to panic");

    res.contentType(finalImg.contentType);

    res.send(finalImg.image);
  });
});


// index Route
  app.get('/', (req, res) => {
    res.sendFile("index.html", { root: view });
});

// index Route
app.get('/images', (req, res) => {
  res.sendFile("multer.html", { root: view });
});
  

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
    console.log('listening to your code on 3000...')
});