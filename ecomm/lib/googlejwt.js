
import { cookies } from "next/headers"
const jwt = require("jsonwebtoken");

export const  googlejwt=(session)=>{
if (session.status==="unauthenticated"){
     
}else if(session.status==="authenticated"){
  const token =jwt.sign(session.data.user,process.env.JWT_KEY)
  cookies().set({
    name: 'jwt',
    secure:true,
    value: token,
    httpOnly: true,
    path: '/',
  })
}}