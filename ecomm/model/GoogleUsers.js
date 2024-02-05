import mongoose from "mongoose";

const  GoogleUsers=  new  mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    image:{
        type:String,require:true,
    }
},{timestamps:true} )

 
module.exports = mongoose.models.Users || mongoose.model('Users',GoogleUsers)