if(process.env.NODE_ENV !=='PRODUCTION')
{
    require('dotenv').config()
}
const express=require('express');
const connectDB= require("./DB/database.js");
const app=express();
const PORT=process.env.PORT || 3000
const mongoose=require("mongoose");

app.get('/ping',(req,res)=> 
{
    return res.send('pong');
});

app.get("/",(req,res)=>{
    const status=mongoose.connection.readyState==1?"Database connected successfully":"Connection failed"
    res.send({status})
});

app.listen(PORT,()=>
{
    connectDB()
    console.log(`Server is running on http://localhost:${PORT}`)
})

