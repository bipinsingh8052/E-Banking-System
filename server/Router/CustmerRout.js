const CustmerController=require("../Contoller/CustmoreController")
const express =require("express");
const route =express.Router();


route.post("/Registration",CustmerController.Registration_Page)
route.post("/login",CustmerController.LoginPage)
route.post("/authoration" ,CustmerController.Authoreation)
module.exports=route;