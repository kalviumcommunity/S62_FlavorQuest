const {ObjectId}=require("mongodb");
const express=require('express')
const router=express.Router()
const User=require('../model/UserModel.js')
const {getDBFunc} = require("../DB/mongo_client.js");
router.use(express.json())
const mongoose=require('mongoose')
require('dotenv').config()
const jwt=require('jsonwebtoken')
const JWT_SECRET=process.env.JWT_SECRET_KEY

router.get('/user',async(req,res)=>{
    try{
        const token= req.cookies.token;
        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }
        const decoded=jwt.verify(token,JWT_SECRET)
        const db=await getDBFunc();
        console.log(db);
        const userData=await db.find().toArray();
        console.log(userData);
        return res.status(200).send(userData);
    }catch(err){
        if (err.name === "JsonWebTokenError" ) {
            return res.status(401).json({ message: "Invalid token" });
        }
    }
})

router.post('/create-data',async(req,res)=>{
    try{
        const db=await getDBFunc();
        console.log(db,req.body);
        const insertData=await db.insertOne({ ...req.body});
        return res.status(201).send({message:"Data inserted successfully",insertData});

    }catch(err){
        return res.status(500).json({message:err.message});
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const db=await getDBFunc();
        console.log(db);
        const {id}=req.params;
        const deleteUser=await db.deleteOne({_id: new ObjectId(id)});
        return res.status(200).send({message:"Deleted successfully",deleteUser})

    }catch(err){
        return res.status(500).json({message:err.message});
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const db=await getDBFunc();
        console.log(db);
        const {id}=req.params;
        const updateUser=await db.updateOne({_id: new ObjectId(id)},{$set:req.body})
        return res.status(200).send({message:"Update successful",updateUser})

    }catch(err){
        return res.status(500).json({message:err.message});
    }
})

module.exports=router
