const express=require('express');
const bodyParser=require('body-parser');
const routes=require('./routes/api');
const mongoose=require('mongoose');


//setup express app
const app=express();

//connect to mongodb
mongoose.connect('mongodb://localhost/flights');
mongoose.Promise=global.Promise;

// app.use(express.static('public'));
app.get('/flights',function(req,res,next){
    console.log("hello");
    res.send("hi");
});
//.use is to use any middleware
app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);

//error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error:err.message});
});

//listen for requests
app.listen(4000,function(){
    console.log('now listening');
});