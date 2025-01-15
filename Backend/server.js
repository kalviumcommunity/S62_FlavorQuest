if(process.env.NODE_ENV!=='PRODUCTION'){
    require('dotenv').config()
}
const mongoose=require('mongoose')
const express = require('express');
const connectDatabase = require('./DB/database.js');
const router=require('./Route/route.js')
const {getDBFunc,connection}=require('./DB/mongo_client.js')
const app =express();
const PORT=process.env.PORT||3010

app.use(express.json());
app.use('/users',router)

app.get('/ping',(request,response)=>{
    return response.send('pong')
})
app.get('/',(req,res)=>{
    const status=mongoose.connection.readyState===1?'Database connected Sucessfully':'Not Connected';
    res.send({status})
});



app.listen(PORT,()=>{
    connectDatabase()
    console.log(`server is running in http://localhost:${PORT}`)
})

