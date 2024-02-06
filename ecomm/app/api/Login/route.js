import { NextResponse } from "next/server";
import User from "../../../model/User";
import CryptoJS from "crypto-js";
import connect from "@/Data/connect";
import { cookies } from "next/headers";
const jwt = require("jsonwebtoken");

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const UserID = await User.find({email:email})
    const findUser = await User.findOne({ email: email });

    if (email == "" || password == "") {
      return NextResponse.json({ message: "invalid property" });}

    if (findUser) {
      var bytes = await CryptoJS.AES.decrypt(await findUser.password, "aliyan");
      var originalpassword = await bytes.toString(CryptoJS.enc.Utf8);
      const token=jwt.sign({email:email,password:password},process.env.JWT_KEY)
      
console.log(originalpassword)
      if (originalpassword != password) {
        return NextResponse.json({ message: "invalid Credientials" });
      } else {
        const oneDay = 24 * 60 * 60 * 1000

        cookies().set({
          name: 'jwt',
          secure:true,
          value: token,
          httpOnly: true,
          expires: new Date(Date.now() + 86400000),
          path: '/',
        });
        cookies().set({
          name: "UserID",
          secure: true,
          value: UserID[0]._id,
          httpOnly: true,
          path: "/",
          expires: new Date(Date.now() + 86400000),
        });
        return NextResponse.json({ message: "Login success", token: token });

      }
    } else {
      return NextResponse.json({ message: "invalid Credientials" });
    }
  } catch (error) {
  
    return NextResponse.json({message:error})
  }
}
