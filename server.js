const express = require("express");
const app = express();
require('dotenv').config();
const connectDb = require("./config/db");

connectDb()
app.use(express.json());
app.use('/api/auth', (req, res) => {
    res.send("start")
})

app.listen(process.env.PORT, () => {
    console.log("server started successfully");
})