import { NextResponse } from "next/server";
import connect from "@/Data/connect";
import User from "../../../model/User";
var CryptoJS = require("crypto-js");
connect();
export async function POST(req) {
  const { name, email, password } = await req.json();
  if ((!name || !email || !password)) {
    return NextResponse.json({ message: "invalid cridential" });
  } else if ((name, email, password)) {
    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      const newUser = new User({
        name: name,
        email: email,
        password: CryptoJS.AES.encrypt(password,'aliyan').toString(),
      });
      newUser.save();
    
      return NextResponse.json({ message: "add new user" });
    }else if(userExist){
    return NextResponse.json({message:'User alrady exist',
                          status:200})
  }
  }
}
export async function GET(req){
  const user = await User.find({})
  return NextResponse.json({User:user})
}