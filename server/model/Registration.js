const mongoose=require("mongoose");
const schema =new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    mobile: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require:true
    },
    fatherName: {
        type: String,
        require: true,
    },
    BirthDate: {
        type: Date,
        require: true,
    },
    address: {
        type: String,
        require:true
    },
    Account_Info: {
        type: String,
        require: true,
    },
    Bank_Branch_name:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("registration",schema)