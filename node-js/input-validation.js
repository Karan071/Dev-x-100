const express = require("express")
const zod = require('zod')
const app = express();
const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup", function(req,res){
    const kidneys = req.body.kidneys;
    // const kidneyLength = kidneys.length;
    const response = schema.safeParse(kidneys);
    

    res.send({
        response
    })

    // res.send("you have " + kidneyLength + " kidneys");
});

// //global catches
// app.use(function(err,req,res,next){
//     res.status(400).send("server are down");
// })

app.listen(3010, function(){
    console.log("Server is running")
})

