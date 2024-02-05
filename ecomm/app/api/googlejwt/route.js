import connect from "@/Data/connect";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import GoogleUsers from "../../../model/GoogleUsers";
import User from "../../../model/User";
import { signIn,signOut,useSession } from "next-auth/react";

const jwt = require("jsonwebtoken");
export async function POST(req) {
  // connect();
  const session = await req.json();
  const findUser = await GoogleUsers.findOne({
    email: session.data.user.email,
  });
 
  const CheckCookies = cookies().get('jwt');
const UserEmail =await User.find({email:session.data.user.email})
 try {
   if (!findUser) {
     const newGoogleUser = await new GoogleUsers({email:session.data.user.email,image:session.data.user.image,name:session.data.user.name});
    await newGoogleUser.save();
 
     if (CheckCookies != undefined) {
       return NextResponse.json({ message: "User alrady Login" });
     } else if (CheckCookies === undefined) {
       if (session.status === "authenticated" ) {
         const token = jwt.sign(session.data?.user, process.env.JWT_KEY);
         const oneDay = 24 * 60 * 60 * 1000;
         cookies().set({
           name: "jwt",
           secure: true,
           value: token,
           httpOnly: true,
           path: "/",
           expires: new Date(Date.now() + 86400000),
         });
         
         cookies().set({
           name: "UserID",
           secure: true,
           value:await UserEmail[0]._id,
           httpOnly: true,
           path: "/",
           expires:  new Date(Date.now() + 86400000),
         });
         return NextResponse.json({
           message: "Login in success",
           status: true,
           token: token,
         });
       } else {
         return NextResponse.json({
           message: "Login in unsuccess",
           status: false,
           session: session,
         });
       }
     }
   } else if (findUser) {
     if (CheckCookies === undefined) {
       if (session.status === "authenticated") {
         const token = jwt.sign(session.data.user, process.env.JWT_KEY);
         const oneDay = 24 * 60 * 60 * 1000;
         cookies().set({
           name: "jwt",
           secure: true,
           value: token,
           httpOnly: true,
           path: "/",
           expires: new Date(Date.now() + 86400000),
         });
         console.log(UserEmail)
         cookies().set({
           name: "UserID",
           secure: true,
           value:await UserEmail[0]._id,
           httpOnly: true,
           path: "/",
           expires: new Date(Date.now() + 86400000),
         });
         
         return NextResponse.json({
           message: "Login in success User alrady in databasce",
           status: true,
           token: token,
         });
       } else {
        
         return NextResponse.json({
           message: "Login in unsuccess  ",
           status: false,
           session: session,
         });
       }
     }else if(CheckCookies!=undefined){
         return NextResponse.json({ message: "User alrady Login" });
     }
   }
 } catch (error) {
  console.log(error.message)
  return NextResponse.json({ message: "Login in server error",data:error.message });
 }
}

// export async function POST(req) {
// const {session} =await req.json();
// const {data:{User}} = session
// if(session.status === "authenticated"){
//     const findUser = await GoogleUsers.findOne({email:User.email})
//     if(!findUser){
//         const newGoogleUser = await new GoogleUsers({email:User.email,image:User.image,name:User.name})
//         await newGoogleUser.save()
//         console.log(newGoogleUser)
        
//     }else{
//         console.log(findUser)
//     }
    

// }

//     return NextResponse.json({msg:"hello"})

// }