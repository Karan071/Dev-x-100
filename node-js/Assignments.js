// Assignment 

const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const zod = require("zod")
const port = 3000;

const app = express()
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/");

const newMongooseUser = mongoose.model('MongoUsers', {
    name : {
        type: String,
    },
    email : zod.string().email(),
    phoneNumber : zod.string(),
    password : zod.string().min(8)
});


//db new user sign up
app.post('/sign-up', async function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const password= req.body.password;

    //if the check the userExists
    const existUser = await newMongooseUser.findOne({email: name});
    if(existUser){OK
        return res.status(400).json({
            msg : "user already exists"
        })
    }

    //creating a db
    const user = new newMongooseUser({
        name: name,
        email: email,
        phoneNumber : phoneNumber,
        password: password
    });

    user.save()
    res.json({
        msg : "User created successfully"
    })
});

app.post('/login', function(req,res){
    const name = req.body.name;
    const password = req.body.password;

    // if()
})




//port listening
app.listen(port, function(){
    console.log(`Server is running on ${port}`);
})