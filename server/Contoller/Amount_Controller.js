const amount_Model =require("../model/AmountDetail")
const custmor_model =require("../model/Registration")
const nodemailer = require("nodemailer");
const AddAmount=async(req,res)=>{
    // console.log(req.body);
    const { amount, userid,status }=req.body;
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
                status:status
        })
        res.status(200).send({msg:"Add the Amount in your Account"})
    } catch (error) {
        res.status(500).send({msg:"Server error"});
    }
   
}

const WithDrawAmount=async(req,res)=>{
    // console.log(req.body);
    const { amount, userid, status }=req.body;
    try {
        const finditAmount = await amount_Model.find({CustmerId:userid})
        // console.log(finditAmount)
        let deposite=0;
        let withdraw =0;
        finditAmount.map((e)=>{
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
        if(answer <=0){
            // console.log(answer,"zero")
            return res.status(400).send({msg:"you have enficenent Balance"});
        }
        if(answer>=0){
            // console.log(answer,"not zero")
            await amount_Model.create({
                CustmerId:userid,
                   amount:amount,
                   status:status
           })
        }
        res.status(201).send({msg:"successfully withdraw it"});
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
   
}


const CheckBalance=async(req,res)=>{
    console.log(req.body);
    res.send("okk")
}


module.exports={

    AddAmount,
    WithDrawAmount,
    CheckBalance
}