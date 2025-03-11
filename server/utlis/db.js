const mongoose =require("mongoose");
const DB_Connection=()=>{
    try {
        mongoose.connect(process.env.DB_Conn)
        .then(()=>{
            console.log("Db id Connected ")
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports={
    DB_Connection
}