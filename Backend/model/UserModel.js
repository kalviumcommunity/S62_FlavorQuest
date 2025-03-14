const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age:{type:Number,required:true},
    description:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    created_at: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);
module.exports = User;