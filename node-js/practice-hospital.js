const express = require('express')
const app = express()
//hostipal db
const users = [{
    name : "John",
    kidneys : [{
        healthy : false
    }]
}];

app.use(express.json());

app.get('/', function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidney = 0;
    for(let i = 0; i < johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidney += 1;
        }
    }
    let numberOfUnHealthyKidney = 0;
    for( let i = 0; i < johnKidneys.length; i++){
        if(johnKidneys[i].healthy == false){
            numberOfUnHealthyKidney += 1;
        }
    }

    res.json({
        numberOfKidneys,
        numberOfHealthyKidney,
        numberOfUnHealthyKidney
    });
})

app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })

    res.json({
        msg : 'healthy kidneys'
    })
})

//411
app.delete('/',function(req,res){

})





function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false
    for(let i = 0; i < users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
}
app.listen(3006, function(){
    console.log(`The server is running`);
})