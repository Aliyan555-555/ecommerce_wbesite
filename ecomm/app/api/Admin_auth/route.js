import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    const jwt= cookies().get('UserId')
    if(jwt===undefined){
        return NextResponse.json({message:"secure admin account",Admin:false})
    }else if (jwt && jwt === '654689e4fb7e5478e0862ae8'){
        return NextResponse.json({message:"Admin login",Admin:true})
    }
    
}