const express = require("express")
const app = express();

//Calculate sum
app.get('/sum', function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if(isNaN(a) || isNaN(b)){
        return res.status(411).send("Provide correct inputs")
    }
    const sum = (a) + (b);
    res.status(200).send(sum.toString());

});

// calculate simple interest 
// prt/100
app.get('/interest', function(req, res){
    const p = parseFloat(req.query.p);
    const r = parseFloat(req.query.r);
    const t = parseFloat(req.query.t);

    const calculate = (p*r*t)/100;

    res.status(200).send(calculate.toString())


})

//global catches
app.use(function(err, req, res, next){
    res.json({
        msg : "Inputs are wrong"
    });
})

app.listen(3000, function(){
    console.log('Server is runing')
})