const mongoose =require("mongoose");
const Schema =new mongoose.Schema({
    custmerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"registration"
    },
    otp:{
        type:Number,
        require:true
    }
})

module.exports= mongoose.model("otp",Schema);