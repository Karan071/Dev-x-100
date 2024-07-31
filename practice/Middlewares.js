/*
Middleware in Express are functions that come into play after the server receives the request and before the response is sent to the client.
Middlewares are commonly used for following 2 use cases
1. Input validation (example for num_kidneys the user must enter only 1 or 2, any other value must give error)
2. Authentication (user must give right username and passwrd)
One ways to do authentication is to do the check in each and every route. But this causes lot of code repetition, against DRY principle
A slightly better approach is to create a wrapper function and call that function from every route. Middleware is an extension of this idea
We define middleware at the top and use it as callback function. Middleware functions have access to 3 arguments (only exception being error handling middleware which have 4, err being the 4th one):
- request object (req)
- response object (res)
- next function (next)
in the application’s request-response cycle.
The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.*/
const express = require('express');

const app = express()

let requestCount = 0;

app.use(express.json());

//middle ware
function requestCount(req,res,next){
    requestCount += 1;
    next();
}

