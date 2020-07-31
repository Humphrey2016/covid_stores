const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const multer = require('multer');
require('../models/addItemModel')

const AddItem = mongoose.model('AddItem');
const Registration = mongoose.model('Registration')

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
// route to get information for the product
router.get('/', (req, res) => {
    res.sendFile('/addItem.html', {
        root: view
    });
});

router.post('/', upload.single('itemPhoto'), async (req, res) => {
    console.log(req.file);
    const addItem = new AddItem({
        itemMake: req.body.itemMake,
        itemMake: req.body.itemMake,
        entryDate: req.body.entryDate,
        category: req.body.category,
        serialNumber: req.body.serialNumber,
        price: req.body.price,
        itemColor: req.body.itemColor,
        itemDesc: req.body.itemDesc,
        numStock: req.body.numStock,
        itemPhoto: req.file.path
    });
    try {
        await addItem.save();
        console.log(req.body);
        res.redirect('/addItem/productlists')
    } catch (err) {
        res.send('Sorry! Something went wrong.')
        console.log(err)
    }
})

// Getting the product list
router.get('/productlists', async (req, res) => {
    try {
        const items = await AddItem.find()
        res.render('productlists', {
            productlists: items
        })
    } catch (err) {
        res.status(400).send('Product list is empty. Add some products')
    }
})

// deleting from the Product list
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

// Updating the Product list
router.post('/update', async (req, res) => {
    const changedEntry = req.body;
    try {
        await AddItem.updateOne({
            _id: req.params.id, $set: changedEntry
        })
        res.redirect("back")
    } catch (error) {
        res.status(400).send("Unable to update")
    }
})


// export module
module.exports = router;



