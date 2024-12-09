const express=require('express');
const app=express();

app.get('/ping',(req,res)=> {
    return res.send('pong');
})

const PORT=3000
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})