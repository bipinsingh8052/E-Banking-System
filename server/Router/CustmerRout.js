const CustmerController=require("../Contoller/CustmoreController")
const express =require("express");
const OtpController =require("../Contoller/OtpController")
const AmountController=require("../Contoller/Amount_Controller");
const route =express.Router();


route.post("/Registration",CustmerController.Registration_Page)
route.post("/login",CustmerController.LoginPage)
route.post("/authoration" ,CustmerController.Authoreation)


route.post("/AddAmount",AmountController.AddAmount)
route.post("/withdraw",AmountController.WithDrawAmount)
route.post("/checkbalance",AmountController.CheckBalance)
route.post("/resetpassword",AmountController.ResetPasword)
route.post("/accountStatement",AmountController.AmountStatement)
route.post("/miniStatement",AmountController.MiniStatement)
route.post("/searchStatement",AmountController.SearchStatement);


route.post("/SendOTP",OtpController.OtpGenerator);
module.exports=route;