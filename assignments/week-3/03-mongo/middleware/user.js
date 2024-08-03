const { User } = require("../db");

function userMiddleware(req, res, next) {
    const username = req.header.username;
    const password = req.header.password;
    // Implement user auth logic

    User.findOne({
        username : username,
        password : password
    }).then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg : "User does not exist"
            })
        }
    })
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;