// CRUD API

const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const port = process.env.PORT || 4000;

// GET: list
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    }
    catch (error) {
        res.status(500).json({ message: "An error occured", error: error})
    }
});

// GET: get by ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customers = await Customer.findOne({_id: id});
        res.status(200).json(customers);
    }
    catch (error) {
        res.status(500).json({ message: "An error occured", error: error})
    }
});

// POST: create
router.post('/', async (req, res) => {
    try {
        const customer = await Customer(req.body);
        const savedCustomer = customer.save();
        res.status(200).json(savedCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "An error occured", error: error})
    }
});

// PUT: update 
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const customer = req.body;
        const updatedCustomer = await Customer.findOneAndUpdate(
            {
                _id: id
            },
            {
                $set: customer
            },
            {
                new: true
            }
        );
        res.status(200).json(updatedCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "An error occured", error: error})
    }
});

//DELETE: delete
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        let deleteCustomer = await Customer.deleteOne({_id: id});
        res.status(200).json(deleteCustomer);
    }
    catch (error) {
        res.status(500).json({ message: "An error occured", error: error})
    }
});

module.exports = router;