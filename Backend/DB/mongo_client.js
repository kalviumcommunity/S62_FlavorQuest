if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config();
}
const mongoClient = require('mongodb').MongoClient;
console.log(process.env.URL);
const connection = new mongoClient(process.env.URL)
async function getDBFunc(){

    try{
        await connection.connect()
        const db = connection.db("ASAP").collection('users');
        return db;
    }catch(err){
        console.error("Failed to connect to mongodb",err);
        throw err;
    }
    
}
getDBFunc();


module.exports = {getDBFunc, connection};

