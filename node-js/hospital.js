const express = require('express')
const app = express()

var users = [{
    name : 'John',
    kidneys : [{
        healthy : false
    }]
}]
//Routes
//get method -> we can send query parems 
app.get('/',function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidney = johnKidneys.length;
    let numberOfHealthyKidney = 0;
    for(let i = 0; i < johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidney += 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidney - numberOfHealthyKidney;
    res.json({
        numberOfKidney,
        numberOfHealthyKidney,
        numberOfUnhealthyKidneys
    })
})

//since we are not using the middlewares
app.use(express.json());

//post method
app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : 'done!'
    })
})
// put method
app.put('/',function(req,res){ 
    for(let i = 0; i < users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})
//delete methodv -> removing all the unhealthy kidneys
app.delete('/',function(req,res){
    if(atleastOneUnhealthyKidney){
        const newKidneys = [];
        for(let i = 0; i < users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:  true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg : 'Removed unhealthy kidneys'
    });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3002, function(){
    console.log(`Ello there mate, the server is on!`)
})