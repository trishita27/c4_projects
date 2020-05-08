const express=require('express');
const router=express.Router();
const Flight=require('../models/flight');

//get a list of flights from the database
router.get('/flights',function(req,res,next){
    //if u need all flights   
    Flight.find({}).then(function(flights){
        res.send({ type:'get'});
        res.send(flights);
    });
});

//add a new flight detail to the database
router.post('/flights',function(req,res,next){
    // var ninja=new Ninja(req.body);
    // ninja.save();
    Flight.create(req.body).then(function(flight){
        res.send(flight);
    }).catch(next);
    
});

//update a flight details in the database
router.put('/flights/:id',function(req,res,next){
    Flight.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Flight.findOne({_id:req.params.id}).then(function(flights){
            res.send(flights);
        });        
    });    
});

//delete a flight from the database
router.delete('/flights/:id',function(req,res,next){
    //console.log(req.params.id);
    Flight.findByIdAndRemove({_id:req.params.id}).then(function(flight){
        res.send(flight);
    });
    // res.send({type:'delete'});
});

module.exports=router;