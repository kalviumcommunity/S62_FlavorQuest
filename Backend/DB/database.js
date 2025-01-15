

if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config();
}

const mongoose=require('mongoose')
const DB=process.env.URL;

const connectDatabase=async(req,res)=>{

    mongoose
        .connect(DB,{useNewUrlParser:true,useUnifiedTopology:true})
        .then((data)=>{
            console.log("DB connected succesfully")
        })
        .catch((Err)=>{
            console.log('DB connection failed',Err.message)
        })
}

module.exports=connectDatabase;
if(process.env.NODE_ENV!=='PRODUCTION')
{
    require('dotenv').config()
}
const mongoose=require('mongoose')

const connectDB=()=>
{
    mongoose
        .connect(process.env.URL)
        .then(() => console.log(`Database is connected successfully`))
        .catch((err) => console.log('Database connection failed..', err.message))
}

module.exports=connectDB;

