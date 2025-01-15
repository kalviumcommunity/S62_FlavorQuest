if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config();
}

const mongoose=require('mongoose')
const DB=process.env.URL;

const connectDatabase=async(req,res)=>{

    mongoose
        .connect(DB,{useNewUrlParser:true,useUnifiedTopology:true})
        .then((data)=>{
            console.log(`DB connected succesfully : ${data.connection.host}`)
        })
        .catch((Err)=>{
            console.log('DB connection failed',Err.message)
        })
}

module.exports=connectDatabase;


