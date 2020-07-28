
const express = require('express');
const bodyParser= require('body-parser');
//importing Stake holders Routes
const managerRoutes = require('./routes/managerRoutes');
const salesAgentsRoutes = require('./routes/salesAgentsRoutes');
const customersRoutes = require('./routes/customersRoutes');

const path = require('path');


const app = express();
var view = "./views/"


app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({extended: true}));

//using the imported Routes
app.use('/', customersRoutes)
app.use('/manager', managerRoutes)
app.use('/agent', salesAgentsRoutes)

// app.post('/quotes', (req, res) => {
//     console.log(req.body) 
// })



app.listen(3000, function() {
    console.log('listening on 3000')
  })