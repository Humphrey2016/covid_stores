
const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require ('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();


// const expressSession = require('express-session')({
//   secret: 'secret',
//   resave: false,
//   saveUninitialized: false
// });


// const logger = require('morgan');
//importing Stake holders Routes
const managerRoutes = require('./routes/managerRoutes');
const salesAgentsRoutes = require('./routes/salesAgentsRoutes');
const customersRoutes = require('./routes/customersRoutes');
const path = require('path');

const app = express();

//mongodb
mongoose.connect("mongodb://localhost:27017/covidapp",{
  useNewUrlParser: true,
  useUnifiedTopology: true
  },
  function(err) {
    if (err) throw err;
    console.log("Successfully connected");
  }
);


//pug engine
app.set('view engine', 'pug');
app.set('views', './views');

//HTML views
var view = "./views/"

app.use(cookieParser());
// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
// To parse json data
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(expressSession);

// Simple request time logger
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

app.get('/home', (req, res) => {
 res.send('Home Page');
});

// app.use(logger('common'));
// app.use(
//   session({
//     secret: 'arbitary-string',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
//   })
// );


app.use(bodyParser.urlencoded({extended: true}));

//using the imported Routes
app.use('/', customersRoutes);
app.use('/manager', managerRoutes);
app.use('/agent', salesAgentsRoutes);

// For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});


//start listening to the server
app.listen(3000, function() {
    console.log('listening to your code on 3000')
  })