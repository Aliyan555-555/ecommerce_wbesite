import mongoose from "mongoose";

const  userShema=  new  mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    image:{type:String}
},{timestamps:true} )

 
module.exports = mongoose.models.Users || mongoose.model('Users',userShema)