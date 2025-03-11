const CustmerController=require("../Contoller/CustmoreController")
const express =require("express");
const route =express.Router();


route.post("/Registration",CustmerController.Registration_Page)


module.exports=route;