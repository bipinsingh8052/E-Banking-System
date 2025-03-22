const amount_Model =require("../model/AmountDetail")
const custmor_model =require("../model/Registration")
const otp_Model =require("../model/OTPModel");
const nodemailer = require("nodemailer");
const OtpGenerator =async(req,res)=>{
    // console.log(req.body);
    const { id }=req.body;
    try {
        let findData =await custmor_model.findById(id)
        // console.log(findData.email);
        
        

       const newOtp = Math.floor(1000 + Math.random() * 9999); 
        //    console.log(newOtp)

           const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "bipinsingh8052@gmail.com",
              pass: "nprr lurs altr vzol", 
            },
          });
          let maildetails = {
            from : "bipinsingh8052@gmail.com",
            to : findData.email,
            subject : "Otp",
            text: "Hello, this is a Otp email!",
            html: `This one time password (OTP) this is deleted in 5 min <h1>${newOtp}</h1> `
          }
          transporter.sendMail(maildetails )

           let finditOtp =await otp_Model.findOne({custmerId:id})
        //    console.log(finditOtp,"oll");
           if(finditOtp){
            // console.log("yes")
           let first= await otp_Model.findByIdAndUpdate(finditOtp._id,{ otp:newOtp})
            return res.status(200).send({msg:"send the Otp in Your Email please check it..!!"})
           }
        
            // console.log("no")
            let first=await otp_Model.create({
            custmerId:id,
            otp:newOtp
           })
             res.status(200).send({msg:"send the Otp in Your Email please check it..!!"})
    } catch (error) {
        res.status(500).send({msg:'server error'});
    }
    
}



module.exports={
    OtpGenerator,
   
}