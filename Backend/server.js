if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const express = require("express");
const connectDatabase = require("./DB/database.js");
const User = require('./model/UserModel.js')
const router = require("./Route/route.js");
const SQLRouter=require('./Route/SqlRoute.js')
const cookieParser=require('cookie-parser')
const { getDBFunc, connection } = require("./DB/mongo_client.js");
const cors=require('cors');
const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());
app.use(cors());
app.use("/users", router);
app.use('/mysql',SQLRouter)
app.use(cookieParser())

app.get('/ping',(request,response)=>{
    return response.send('pong')
})
app.get('/', async (req,res)=>{
  const checkStatus=await connection.connect();
  const readyState = connection.topology.isConnected()? 'Connected  Database successfully': 'Disconnected Database';
  res.send({readyState})
})
app.post('/login', (req, res) => {
  const { username } = req.body;
  if (!username) {
      return res.status(400).json({ message: 'Username is required' });
  }

  res.cookie('username', username, { httpOnly: true, secure: true, sameSite: 'Strict' });
  res.json({ message: 'Login successful' });
});


app.post('/logout', (req, res) => {
  res.clearCookie('username');
  res.json({ message: 'Logout successful' });
});




app.listen(PORT, () => {
  connectDatabase();
  console.log(`server is running in http://localhost:${PORT}`);
});

