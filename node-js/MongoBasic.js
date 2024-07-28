const express = require('express');
const mongoose = require('mongoose');
const port = 3010;

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://admin:LYlHAACZ3dIJVDzr@cluster01.gzbot56.mongodb.net/');

// model of the table (schema)
const newUsers = mongoose.model('newUser',{
    name : String,
    email : String,
    password : String,
    age : Number
});

// post method 
app.get('/signup', async function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const age = req.body.age;
    // check if the user exists
    const existingUser = await newUsers.findOne({email : name});

    if(existingUser){
        res.status(400).send("User already exists");
    }

    //creating user in db
    const user = new newUsers({
        name : name,
        email : email,
        password : password,
        age : age
    });

    user.save();

    res.json({
        msg : "User created successfully"
    })

})


app.listen(port, function() {
    console.log(`Server is running on ${port} `);
} )