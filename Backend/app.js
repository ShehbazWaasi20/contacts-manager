const express = require("express");
const app = express();
var cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose")
const user= require("./model/user")
const contact = require("./model/contact")
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");

// const url = "mongodb+srv://Shehbaz_Waasi:ShehbazDB20@cluster0.e6i2kdw.mongodb.net/contacts-manager?retryWrites=true&w=majority";
const url = "mongodb://localhost:27017"
async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log("conected to database")
    } catch (e) {
        console.log(e)
    }
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

async function main() {
    await connectDB();
    app.get("/", function (req, res) {
        res.send("Contact manager")
    })
   
    
    app.use('/',userRoutes);
    app.use('/',contactRoutes);

    app.listen(process.env.PORT ||7000, function () {
        console.log("server start at http://localhost:7000")
    });
}
main()