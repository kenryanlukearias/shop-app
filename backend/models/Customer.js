const mongoose = require('mongoose');

// Connects to database
const CustomerSchema = mongoose.Schema(
    {
        date: {
            type: Date,
        },

        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },
    },
    
);

const Customer = mongoose.model('customers', CustomerSchema);

module.exports = Customer;