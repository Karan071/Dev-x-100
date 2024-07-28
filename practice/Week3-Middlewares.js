const express = require("express");
const app = express();

// Middlewares - examples
//without function middle ware
// function isOldEnough(age){
//     if(age >= 20 && age <= 60){
//         return true;
//     }
//     return false;
// }

//defining a middlware
// function isOldEnoughMiddleware(req,res,next){
//     const age = req.query.age;
//     if(age >= 20 && age <= 60){
//         next()
//     }else{
//     res.status(411).json({
//         msg : "You are not eligible"
//     })
//     }
// }

// //if an middleware is called in evry route we should declare its as
// // app.use(isOldEnoughMiddleware)
// // app.use //will only work whatever routes mentioned below the line|| not abov

// // end point 1
// app.get("/ride-1",isOldEnoughMiddleware, function(req,res){
//     if(isOldEnough(req.query.age)){
//         res.status(200).json({
//             msg : "You have successfully ride1"
//         })
//     }else{
//         res.status(411).json({
//             msg : "You are not eligible"
//         })
//     }
// })
// // end point 2
// app.get("/ride-2", function(req,res){
//     if(isOldEnough(req.query.age)){
//         res.status(200).json({
//             msg : "You have successfully ride1"
//         })
//     }else{
//         res.status(411).json({
//             msg : "You are not eligible"
//         })
//     }
// })


// You have to create a middleware for logging the number of requests on a server.

let numberOfRequests = 0;
function countNumberOfRequest(){
    numberOfRequests =+ 1;
    next();
}



//listen app
app.listen(3000, function(){
    console.log("Server is running")
})