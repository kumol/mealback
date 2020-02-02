var express = require("express");
var app = express()
var router = express.Router();
//const time = require('../models/time.json');
var mongoose = require('mongoose');
var EmailUser = require("../models/user");

var region = "Asia"+"/"+"Dhaka";
var k = time[region];
console.log(k);
var st = k[1]+k[2]+"."+k[4]+k[5]

router.post("/mailall",(req,res,next)=>{
    EmailUser.find().then((user)=>{
        
    }).catch((err)=>{
        res.status(404).json({error:err});
    })
})
router.post("/adduser",(req,res,next)=>{
    var user = new EmailUser()
    user.name = req.body.name;
    user.email = req.body.email;
    user.region = req.body.continent+"/"+req.body.city;
    user.time = time[user.region];
    console.log(user);
});

router.get("/user",(req,res,next)=>{
    EmailUser.find().then((user)=>{
        res.status(200).json({user:user});
    }).catch((err)=>{
        res.status(404).json({error:err});
    })
})
module.exports = router;