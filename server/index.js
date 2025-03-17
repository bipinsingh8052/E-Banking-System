const express =require("express");
const app =express();
require("dotenv").config();
const DBConnecting = require("./utlis/db")
const bodyParser =require("body-parser");
const cors=require("cors");
const cookieParser = require("cookie-parser");
const custmorRoute=require("./Router/CustmerRout")
const session =require("express-session");
app.use(cors())
app.use(cookieParser());
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }))

// // parse application/json
// app.use(bodyParser.json())

app.use(express.json());

let port =process.env.PORT||9091;





DBConnecting.DB_Connection();


app.use("/amanbank",custmorRoute)


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

