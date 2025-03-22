const mongoose =require("mongoose");
const Schema =new mongoose.Schema({
    CustmerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"registration"
    },
    amount:{
        type:Number,
        require: true
    },
    amountDetail:{
        type:String,
        require: true
    },
    status:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now,
        require:true
    }
})



const AmountDetail = mongoose.model("AmountDetail", Schema);
module.exports = AmountDetail;