
import mongoose from "mongoose";

const OrderShema = new mongoose.Schema({
  User:{
    type:String,
    require:true
  },
  Date:{
    type:String,
    require:true
  },
  OrderID:{
    type:String,
    require:true
  },
  Category:{
    type:String,
    require:true
  },
  Status:{
    type:String,
    require:true,
    default:'Pandding'
  },
  Product:[
    {
      title:{type:String,require:true},
      price:{type:String,require:true},
      image:{type:String,require:true},
      totleprice:{type:String,require:true},
      varient:{
        color:{type:String,require:true},
        size:{type:String,require:true},
        quantity:{type:String,require:true},
      },
    }
  ]

 
},{timestamps:true});

module.exports = mongoose.models.finalOrder || mongoose.model('finalOrder',OrderShema)