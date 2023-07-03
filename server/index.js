require('dotenv').config()
const express = require('express');

const connectDB = require('./DB/connectDb');
const app = express();

const PORT = process.env.PORT || 5000;

console.log(process.env.MONGOOSE_URL);

const start  = async () => {
    try {
        await connectDB(process.env.MONGOOSE_URL);
        app.listen(PORT, ()=>{
            console.log(`Server running on : ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

// starts the server 
start()