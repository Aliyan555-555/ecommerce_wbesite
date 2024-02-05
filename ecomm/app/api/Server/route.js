import { NextResponse } from "next/server";
import Product from "../../../model/Product"
import connect from "@/Data/connect";
import { client } from "@/lib/client";
export async function GET(Request) {
 try {
   connect()
     const Bannerqurye = `*[_type == 'Banner']`;
     const Bannerdata = await client.fetch(Bannerqurye);
     const banners = await Bannerdata;
     const Customeproduct =await Product.find({})
     return NextResponse.json([banners,Customeproduct])
 } catch (error) {
  return NextResponse.json({msg:error.message,error:true,data:error})
 }
  }

 export async function POST(req,res) {
  // connect()
  const data = await req.json()


  try{
    const newProduct = await Product.create(data)
    newProduct.save()
    return NextResponse.json({msg:'Product was add',error:false,data:newProduct})

  }catch(e){
    return NextResponse.json({msg:'Product was not add',error:true,data:e})
  }

 } 
 