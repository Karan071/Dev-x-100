const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = "12001414";
const port = 3000;

const app = express();
app.use(express.json()); // middlware to pass the body

//in memory - data without the DB
const ALL_USERS = [
    {
      username: "harkirat@gmail.com",
      password: "123",
      name: "harkirat singh",
    },
    {
      username: "raman@gmail.com",
      password: "123321",
      name: "Raman singh",
    },
    {
      username: "priya@gmail.com",
      password: "123321",
      name: "Priya kumari",
    },
  ];

  function checkValidUsers(username, password){
    let checkValidUsers = false;
    for(let i = 0; i < ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            checkValidUsers = true;
        }
    }
    return checkValidUsers;
  }


  
// post end point
app.post('/signin', function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!checkValidUsers(username, password)) {
        return res.status(403).json({
            msg : "User does not exist in the Database"
        });
    }

    //jsonwebtoken -> implementation - sign method
    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token
    });
});

app.get('/users', function(req,res){
    const token = req.header.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return the list of users other than the input username
        res.json({
            users : ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false;
                }else{
                    return true;
                }
            })
        })
    }catch(err){
        return res.status(403).json({
            msg : "Invalid Token"
        })
    }
});

app.listen(port, function (){
    console.log(`Server is running on ${port}`)
});