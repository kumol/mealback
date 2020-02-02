const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3030;
var mainRouter = require("./api/index");
//var email = require("./api/email");
let meal = require("./api/meal");
app.listen(port,(err)=>{
    if(!err){
        console.log("Successful");
    }
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect("mongodb://kumol:kumol254@ds153906.mlab.com:53906/blog",(err)=>{
    if(!err){
        console.log("database connection successful");
    }
    else{
        console.log(err);
    }
})
app.use("/api",mainRouter);
//app.use("/email",email);
app.use("/meal",meal);