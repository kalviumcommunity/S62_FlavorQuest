
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

if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config();
}
const express = require('express');
const {getDB,connection} = require("./DB/mongo_client");
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const checkStatus = await connection.connect();
    const readyState = connection.topology.isConnected()? 'Connected successfullly': 'disconnected';
    res.send(`<h3>Database Connection Status : ${readyState} </h3>`);
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
