if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const express = require("express");
const connectDatabase = require("./DB/database.js");
const User = require('./model/UserModel.js')
const router = require("./Route/route.js");
const SQLRouter=require('./Route/SqlRoute.js')
const { getDBFunc, connection } = require("./DB/mongo_client.js");
const cors=require('cors');
const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use(cors());
app.use("/users", router);
app.use('/mysql',SQLRouter)

app.get('/ping',(request,response)=>{
    return response.send('pong')
})
app.get('/', async (req,res)=>{
  const checkStatus=await connection.connect();
  const readyState = connection.topology.isConnected()? 'Connected  Database successfully': 'Disconnected Database';
  res.send({readyState})

})




app.listen(PORT, () => {
  connectDatabase();
  console.log(`server is running in http://localhost:${PORT}`);
});

