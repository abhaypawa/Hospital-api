require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
const connectDB = require("./config/mongoose");
const cors = require("cors");


app.use(cors());

///------------- Body Parser for req.body ----------------///
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

///--------- USING ROUTES --------------///
app.use("/", require("./routes"));


app.listen(port, (error)=>{
    if(error){
        console.log('error in setting up of server');

    };
    console.log(`server is running at port ${port}`);
    connectDB();
})