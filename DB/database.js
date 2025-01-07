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