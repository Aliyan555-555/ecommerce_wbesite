const  jwt =require('jsonwebtoken')
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async  function POST(req){
   const tokenOld = cookies().get('Admin_jwt')
    if (tokenOld===undefined){
        
        const token=jwt.sign({admin:true,name:'aliyan',email:'aliyansiddiqui555@gmail.com'},process.env.JWT_KEY)
        cookies().set({
            name:'Admin_jwt',
            value:token,
            secure:true,
            httpOnly: true,
            path: '/',
            expires: new Date(Date.now() + 3600000)
        })
        return  NextResponse.json({message:"Genrated Admin token ",Admin:true})
    }else{
        return  NextResponse.json({message:"your are not Admin token ",Admin:false})
    }
    
}