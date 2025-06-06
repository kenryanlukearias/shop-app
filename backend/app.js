// API
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const PORT = 3000;

// enable CORS
app.use(cors()); 
// enable JSON parsing
app.use(express.json());

// route the customer API
const customersRoutes = require('./routes/customers');
// use the route
app.use('/api/customers', customersRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is successfully listening to port:", PORT);
    }
    else {
        console.log("an error occured", error);
    }
});

main().catch((error) => console.error(error));

async function main() {
    // prepare connection string
    const connectionString = `mongodb+srv://studyholicprocrastinator:LY054Tho2dvCnPEC@cluster0.eat16.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(connectionString);
    mongoose.set('strictQuery', true);
}