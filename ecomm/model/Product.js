
import mongoose from "mongoose";

const Product = new mongoose.Schema({
   
         title:{
            type:String,
            required:true,
         },
         description:{
            type:String,
            required:true,
         },
         price:{
            type:Number,
            required:true,
         },
         oldprice:{
            type:Number,
            required:true,
         },
         colors:{
            type:Array,
         },
         sizes:{
            type:Array,
         },
         tags:{
            type:Array,
         },
         images:{
            type:Array,
            required:true,
         }

    
},{timestamps:true});

module.exports = mongoose.models.Product || mongoose.model('Product',Product)