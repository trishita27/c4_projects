const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FlightSchema=new Schema({
    name:{
        type:String,
        required:[true,'Name field is required']
    },
    from:{
        type:String,
        required:[true,'From destination is required.']
    },
    to:{
        type:String,
        required:[true,'To destination is required']
    },
    available_seats:{
        type:Number        
    }
    
});

const Flight=mongoose.model('flight',FlightSchema);

module.exports=Flight;