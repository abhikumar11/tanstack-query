const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
connectDB();
app.use("/api/user",require("./routes/User"));

app.listen(3001,()=>{
    console.log('Server is running on port 3001');
});