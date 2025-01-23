require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const adminController = require('./controllers/adminController');

app.use(express.json());
app.use(cors({ origin: '*' }));
  
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/";
console.log(process.env.MONGO_URL)
mongoose.connect(mongoUrl);
console.log("Connected to MongoDB");    

app.use('/admin', adminController); 

app.listen(5001, () => {
    console.log(`Backend is running on port 5001`);
});
  