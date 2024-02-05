import { NextResponse } from "next/server";
import Order from "../../../model/Order";
import connect from "@/Data/connect";  
import { cookies } from "next/headers";


connect()

export async function POST(req) {
const {User,Product,Status,Category,OrderID,Date}=await req.json()
console.log(Product)
const newOrder=new Order({User:User,Product:Product,Status:Status,Category:Category,OrderID:OrderID,Date:Date})
await newOrder.save()
return NextResponse.json({message:"Order sucsess fully placed"})
}
export async function GET(){
    const Orders= await Order.find({})

    const UserID =cookies().get('UserID')
    return NextResponse.json({Orders:Orders,UserID:UserID})
}