const CustmerController=require("../Contoller/CustmoreController")
const express =require("express");
const route =express.Router();


route.post("/Registration",CustmerController.Registration_Page)
route.post("/login",CustmerController.LoginPage)

module.exports=route;