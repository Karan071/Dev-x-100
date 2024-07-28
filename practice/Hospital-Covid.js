// //Ugly way to write code because
// const express = require("express");
// const app = express();

// app.get('/health-checkup', function(req,res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(username != "Karan" || password != "pass"){
//         res.status(400).json({"msg": "Something is wrong"})
//         return;
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({"msg": "Something is wrong"})
//         return;
//     }
//     //do this thing with kidneyID and perform a logic
//     res.json({
//         msg: 'Kidneys are fine'
//     })

// });

// app.post('/replace-kidneys', function(req,res){
//     const username = req.header.username;
//     const password = req.header.password;
//     const kidneyId = req.query.kidneyId;

//     if(username != 'Karan' || password != 'pass'){
//         res.status(400).json({
//             "msg" : "invalid creds"
//         })
//         return;
//     }

//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(400).json({
//             "msg" : "Invalid creds"
//         })
//         return;
//     }

//     //replace logic 
//     res.json({
//         "msg" : "we can replace the kidneys"
//     })

// });

// app.listen(3000, function () {
//   console.log(`Server is running`);
// });


// ugly ways to write the code without middlewares

//     // app.get("/health-checkups", function (req, res) {
//     //   const username = req.header.username;
//     //   const password = req.headers.password;
//     //   const kidneyId = req.query.kidneyId;
    
//     //   //Logic for authentication
//     //   if (username === "Karan" && password === "pass") {
//     //     if (kidneyId == 1 || kidneyId == 2) {
//     //       res.json({
//     //         msg: "kidneys are fine",
//     //       });
//     //     } else {
//     //       res.json({
//     //         msg: "Bad inputs",
//     //       });
//     //     }
//     //   }
//     //   res.status(400).json({msg : "Something is up with your inputs"})
//     // });



// now the better way to write the routes using middlewares

const express = require('express');
const app = express()

// Authentication Middleware
function authMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != 'karan' && password != 'pass'){
        return res.status(400).json({msg: 'Something is up'});
    }
    next();
}

//Validate middleware
function validateMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 || kidneyId != 2){
        return res.status(400).json({msg: 'Something is up'});
    }
    next();
}

// we can pass the middleware directly in the routes
app.get('/health-checkup', authMiddleware, validateMiddleware, function(req,res){
    res.json({
        msg: 'Kidney seems fine'
    });

});


app.listen(3000, function(){
    console.log(`server is running`)
})