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
    passportimg: {
        type: String,
        require: true,
    },
    signImg:{
        type:String,
        require:true
    },
    addharimg:{
        type:String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    fatherName: {
        type: String,
        require: true,
    },
    mothername:{
        type:String,
        require:true
    },
    BirthDate: {
        type: String,
        require: true,
    },
    address: {
        type: String,
        require:true
    },

        acountNumber:{
            type:String,
            require:true
        },
        accountpassword:{
            type:String,
            require:true
        },
        accountStatus:{
            type: String,
            require: true
        },
        branchname:{
            type:String,
            require:true
        }
  
})

module.exports=mongoose.model("registration",schema)