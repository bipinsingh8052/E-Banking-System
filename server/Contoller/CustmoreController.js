const registration_Model=require("../model/Registration")
const genertedPassword =require("../utlis/GeneratedPassword")
const genertedAccountNo =require("../utlis/GeneratedAccountNumber")
const bcrypt =require("bcryptjs");
const jwt=require("jsonwebtoken");
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
            //   console.log("mail send successfully")
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
               
                    acountNumber:accountnumber,
                    accountpassword:hasPassword,
                    accountStatus:accountstatus,

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
    // console.log(req.body);
    const { account, password }=req.body;

    // try {
    //     let data =await registration_Model.findOne({acountNumber:account });
    //     if(!data){
    //         return res.status(400).send({msg:"Invalid Account number write Currect !!"})
    //     }
    //     const passwordMatching = await bcrypt.compare(password,data.accountpassword);
    //     if(!passwordMatching ){
    //         return res.status(400).send({msg:"invalid password try again!!"})
    //     }
    // //     res.cookie("account_holder_name","data.name",{ expires: new Date(Date.now()+ 25892000000),httpOnly:true })
    // //    res.cookie("account_No","data.acountNumber",{ expires: new Date(Date.now()+ 25892000000),httpOnly:true })

    // // res.cookie("userData", "users"); 

    // const token =await jwt.sign({id:data._id},process.env.JwtToken,{ expiresIn: '30day' } )
    // // console.log(token)
    // res.status(200).cookie("account_No",token,{ expires: new Date(Date.now()+ 25892000000),httpOnly:true }).json("ghjk")
   


    //     // res.status(200).cookie("token", token, {
    //     //     httpOnly: true, // Prevents JavaScript from accessing cookies (security)
    //     //     // secure: process.env.NODE_ENV === "production", // Use Secure Cookies in Production
    //     //     maxAge: 60 * 60 * 1000 ,// 1 hour expiry
    //     //     sameSite: "strict",
    
    //     // }).json({ message: "Login successful" });

        
    // } catch (error) {
    //     res.status(500).send({msg:"Server Error"})
    // }




    try {
        let data = await registration_Model.findOne({ acountNumber: account });
        if (!data) {
            return res.status(400).send({ msg: "Invalid Account Number!" });
        }

        const passwordMatching = await bcrypt.compare(password, data.accountpassword);
        if (!passwordMatching) {
            return res.status(400).send({ msg: "Invalid password!" });
        }

        // ✅ Generate JWT Token
        const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, { expiresIn: "30d" });

    
        // res.cookie("authToken", token, {
        //     httpOnly: true,
        //     // secure: process.env.JWT_SECRET === "production",
        //     sameSite: "Lax",
        //     maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        // });

        res.status(200).send({token:token});

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server Error" });
    }
    
}



const Authoreation=async(req,res)=>{
            const token=req.header("tokensid");
            // console.log(token)
            try {
                let searchData=null
                const vers=await jwt.verify(token,process.env.JWT_SECRET,(error,auth)=>{
                    
                    if(auth){
                        // console.log("match the token",auth)
                        searchData =auth.id;
                        
                        // res.status(200).send(auth)
                    }
                
                });
                // console.log(searchData)
                    let data= await registration_Model.findById(searchData).select("-accountpassword")
                    // console.log(data);
                    res.status(200).send(data);
            } catch (error) {
                res.status(500).send("not Found");
            }
}

module.exports={
    Registration_Page,
    LoginPage,
    Authoreation
}