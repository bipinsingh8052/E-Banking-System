const amount_Model =require("../model/AmountDetail")
const custmor_model =require("../model/Registration")
const otp_Model =require("../model/OTPModel");
const nodemailer = require("nodemailer");
const bcrypt =require("bcryptjs");


const AddAmount=async(req,res)=>{
    // console.log(req.body);
    const { amount, userid,status , option}=req.body;
    try {
        const data =await custmor_model.findById(userid)
        // console.log(data.email)
        const{name,acountNumber}=data;
         const transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                          user: "bipinsingh8052@gmail.com",
                          pass: "nprr lurs altr vzol", 
                        },
                      });
                      let maildetails = {
                        from : "bipinsingh8052@gmail.com",
                        to : data.email,
                        subject : "E-Banking registration",
                        text : ` Your account successfully created \n Your Account number ${data.accountnumber} `,
                        html: `<b>Dear ${name} </b><br> Your created money in your account <br>Your Account number <h1> ${acountNumber}</h1>  Deposite a amount Rs. <h1> ${amount}</h1> on your account  <p>Your don't share your password any person </p> `
                      }
                      transporter.sendMail(maildetails )
                    //   console.log("mail send successfully")
        const create =await amount_Model.create({
             CustmerId:userid,
                amount:amount,
                status:status,
                amountDetail:option
        })
        res.status(200).send({msg:"Add the Amount in your Account"})
    } catch (error) {
        res.status(500).send({msg:"Server error"});
    }
   
}

const WithDrawAmount=async(req,res)=>{
    // console.log(req.body);
    const { amount, userid, status,option }=req.body;
    try {
        const finditAmount = await amount_Model.find({CustmerId:userid})
        // console.log(finditAmount)
        let deposite=0;
        let withdraw =0;
        // console.log(withdraw)
        finditAmount.map((e)=>{
            if(e.status=="Deposite"){
                deposite+=e.amount;
            }
            else if(e.status=="Withdraw")
            {
                withdraw+=e.amount;
                // console.log(withdraw)
            }
        })
        withdraw+=Number(amount);
        let answer =deposite-withdraw;
        console.log(deposite,withdraw)
        // console.log(answer)
        if(0>answer){
            // console.log(answer,"zero")
            return res.status(400).send({msg:"you have enficenent Balance"});
        }
        if(answer>=0){
            // console.log(answer,"not zero")
            await amount_Model.create({
                CustmerId:userid,
                   amount:amount,
                   status:status,
                   amountDetail:option
           })
           const data =await custmor_model.findById(userid)
           const{name,acountNumber}=data;
           const transporter = nodemailer.createTransport({
                          service: "gmail",
                          auth: {
                            user: "bipinsingh8052@gmail.com",
                            pass: "nprr lurs altr vzol", 
                          },
                        });
                        let maildetails = {
                          from : "bipinsingh8052@gmail.com",
                          to : data.email,
                          subject : "E-Banking registration",
                          text : ` Your account successfully created \n Your Account number ${data.accountnumber} `,
                          html: `<b>Dear ${name} </b><br> Your created money in your account <br>Your Account number <h1> ${acountNumber}</h1>  withDraw  amount in your account Rs. <h1> ${amount}</h1> on your account  <p>Your don't share your password any person </p> `
                        }
                        transporter.sendMail(maildetails )
        }
        res.status(201).send({msg:"successfully withdraw it"});
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
   
}


const CheckBalance=async(req,res)=>{
    // console.log(req.body);
    const { id}=req.body;
    try {
        const finditAmount = await amount_Model.find({CustmerId:id})
        // console.log(finditAmount)
        let deposite=0;
        let withdraw =0;
        let arr=finditAmount.map((e)=>{
            if(e.status=="Deposite"){
                deposite+=e.amount;
            }
            if(e.status=="Withdraw")
            {
                withdraw+=e.amount;
            }
        })
        let answer =deposite-withdraw;
        // console.log(answer)
        res.status(200).send({amount:answer})
    } catch (error) {
        res.status(500).send({msg:"Server Error"});
    }
    
}





const ResetPasword=async(req,res)=>{
    console.log(req.body);
    const {
        userid,
        oldpassword,
        newpassword,
        confomepass,
        otp
      }=req.body;
      try {
        let finddata =await custmor_model.findById(userid);
        const passwordMatching = await bcrypt.compare(oldpassword, finddata.accountpassword);
        if (!passwordMatching) {
            // console.log(passwordMatching);
            return res.status(400).send({ msg: "inCorrect password!" });
        }

        const findOtp =await otp_Model.findOne({custmerId:userid})
        // console.log(findOtp);
        if(findOtp.otp!=otp){
            return res.status(400).send({ msg: "In_Correct otp please write Currect otp" });
        }
       
                  let salt =await bcrypt.genSalt(10);
                  let hasPassword=await bcrypt.hash(newpassword,salt);
             let updataPassword =await custmor_model.findByIdAndUpdate(userid,{accountpassword:hasPassword})
               res.status(200).send({msg:"Your pasword is Reset it..!!"})
      
       
      } catch (error) {
        res.status(500).send({msg:"Server Error"})
      }  
}



const AmountStatement=async(req,res)=>{
    // console.log(req.body);
    const { userid }=req.body;
    try {
        // const findData=await amount_Model.find({CustmerId:userid}).sort({date:-1})
        const findData=await amount_Model.find({CustmerId:userid})
        // console.log(findData)
        res.status(200).send(findData)
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
    
}



const MiniStatement=async(req,res)=>{
    // console.log(req.body);
    const { userid }=req.body;
    try {
        const findData=await amount_Model.find({CustmerId:userid}).sort({date:-1}).limit(8);
        // console.log(findData)
        res.status(200).send(findData)
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
  
}


const SearchStatement=async(req,res)=>{
    // console.log(req.body);
    const { userid ,enddate, startdate}=req.body;
    try {
        // let findData =await amount_Model.find({
        //     $and: [
        //       {
        //     $and: [
        //       { From: { $gte: startdate } },
        //       { To: { $lte: enddate } },
        //     ],    // and operator body finishes
        //     },
        //       { CustmerId:userid},
        //     ], //Or operator body finishes
        //   }).sort({date:-1})


        let findData =await amount_Model.find({    
                $and: [
                    {"date":{ $gte: startdate ,
                    $lte: enddate }},
                  { CustmerId:userid}
                ],
              })
        //   console.log(findData)
          if(findData.length ==0){
            // console.log("no")
            return res.status(400).send({msg:"false"})
          }
           res.status(200).send(findData)
    } catch (error) {
        res.status(500).send({msg:"server error"})
    }
    
}



const ProfilePage=async(req,res)=>{
    // console.log(req.body)
    const { userid }=req.body;
    try {
        let data =await custmor_model.findById(userid)
        // console.log(data)
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("server error");
    }
    
}

module.exports={

    AddAmount,
    WithDrawAmount,
    CheckBalance,
    ResetPasword,
    AmountStatement,
    MiniStatement,
    SearchStatement,
    ProfilePage
}