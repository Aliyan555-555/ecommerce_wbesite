import { NextRequest, NextResponse } from "next/server";
import Product from "../../../../model/Product"

export async function PUT(req,{ params }) {
    
    try {
        const {id} = params;
        const data =await req.json();
        const updateProduct = await Product.updateOne({_id:id},data)
        return NextResponse.json({msg:"Product was Updated",error:false,data:updateProduct})
    
    } catch (error) {
        return NextResponse.json({msg:error.message,error:true,data:null})
    }
}
export async function DELETE(req,{ params }) {
    try {
        const {id} = params;
       await Product.deleteOne({_id:id})
        return NextResponse.json({msg:"Product was Deleted",error:false})
    } catch (error) {
        return NextResponse.json({msg:error.message,error:true,data:null})
    }
}