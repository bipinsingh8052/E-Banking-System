const registration_Model=require("../model/Registration")
const genertedPassword =require("../utlis/GeneratedPassword")
const genertedAccountNo =require("../utlis/GeneratedAccountNumber")
const bcrypt =require("bcryptjs");
const nodemailer = require("nodemailer");
const Registration_Page=async(req,res)=>{
    // console.log(req.body)
    const{
        addharimg,
        signimg,
        passport,
        name,
        mothername,
        number,
        email,
        fathername,
        address,
        branchname,
        DOB,
        accountstatus
      }=req.body;
      let password=genertedPassword()
      let salt =await bcrypt.genSalt(10);
      let hasPassword=await bcrypt.hash(password,salt);
    // console.log(genertedAccountNo)
    let accountnumber=genertedAccountNo
      try {
        let findit = await registration_Model.findOne({email:email})
        if(findit){
            return res.status(400).send({msg:"allready have Account!!"})
        }
        else if(!findit){

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "bipinsingh8052@gmail.com",
                  pass: "nprr lurs altr vzol", 
                },
              });
              let maildetails = {
                from : "bipinsingh8052@gmail.com",
                to : email,
                subject : "E-Banking registration",
                text : ` Your account successfully created \n Your Account number ${accountnumber} \n Your Password is ${password}`,
                html: `<b>Dear ${name} </b><br> Your account successfully created <br>Your Account number <h1> ${accountnumber}</h1>  Your Password is <h1> ${password}</h1> <p>Your don't share your password any person </p> `
              }
              transporter.sendMail(maildetails )
              console.log("mail send successfully")
            let data =await registration_Model.create({
                name:name,
                mobile: number,
                passportimg: passport,
                signImg:signimg,
                addharimg:addharimg,
                email:email,
                fatherName:fathername,
                BirthDate:DOB,
                address: address,
                Account_Info: {
                    acountNumber:accountnumber,
                    accountpassword:hasPassword,
                    accountStatus:accountstatus
                },

                mothername:mothername,
                branchname:branchname
            })
        }
        res.status(201).send("okk")
      } catch (error) {
        res.status(500).send({msg:"Server Error"})
      }
  
}




const LoginPage =async(req,res)=>{
    console.log(req.body);
    const { account, password }=req.body;

    try {
        let data =await registration_Model.findOne({acountNumber:account});
        console.log(data)
        res.send("okk");
    } catch (error) {
        res.status(500).send({msg:"Server Error"})
    }
    
}

module.exports={
    Registration_Page,
    LoginPage
}