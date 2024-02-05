"use client"
import React, { useEffect, useState } from "react";
import Header from "./PageHeader";
import Image from "next/image";
import { MdOutlineDevices } from "react-icons/md";
import { useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
const DropDowne=()=>{
  return (
    <ul className="Slider left-0 bottom-0 w-full h-[300px] border-t border-t-hover">
      <li className="border-b w-full p-4 border-b-hover">
         
      </li>
    </ul>
  )
}
const Status =({Status})=>{
  return (
    <p className="flex items-center justify-center rounded-full text-[14px] bg-theme w-[130px] h-[40px]">
      {Status}
    </p>
  )
}
const Category=({Category,Icon})=>{
  return (
    <p className="title h-full flex gap-4 items-center"><span className="p-4  text-4xl bg-theme rounded-md"><Icon/></span>{Category}</p>
  )
}
const Order = () => {
  const [Orders,setOrders] = useState([])
  const [Users,setUsers] = useState([])
  const [Slider,setSlider] = useState(false)

  
const OrdersData=async()=>{
  const res = await fetch('/api/Orders',{
    method:'GET',
    headers:{
      'Content-type':'application/json'
    }
    
  })
  const data = await res.json()

 setOrders(data.Orders)
 }

const UserData=async()=>{
  const res=await fetch('/api/User',{
    method:'GET',
    headers:{
      'Content-type':'application/json'
    }
  })
  const Users=await res.json()
  if (Users.length!=0) {
   setUsers(Users)
  }

}

 useEffect(()=>{
  UserData();
  OrdersData();
 },[])

 const User=(UserID)=>{

   return Users.User?Users.User.filter((item)=>item._id===UserID)[0]?.email:'User not found'

 
  }

  return (
    <div className="w-full h-full flex gap-4 flex-col subpixel-antialiased text-Dashboard">
     
      <style jsx global>{`
        /* width */
        ::-webkit-scrollbar {
          width: 8px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #888;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .header {
          
          display: grid;
          grid-template-columns: 10% 10% 10% 15% 10% 5% 15% 15% 5% ;
          grid-template-rows: 80px;
          gap: 0px 0px;
          grid-auto-flow: row;
          grid-template-areas: ". . . . . . . . .";
        }
        .header1 {
          
          display: grid;
          grid-template-columns:10% 10% 10% 15% 10% 5% 15% 15% 5%;
          grid-template-rows: 110px;
          gap: 0px 0px;
          grid-auto-flow: row;
          grid-template-areas: "index image date title payment varient status  email action";
         
        }
        .index{ grid-area: index; }
        .Slider{ grid-area: Slider; }
        .image{ grid-area: image; }
        .title{ grid-area: title; }
        .date{ grid-area: date; }
        .varient{ grid-area: varient; }
        .payment{ grid-area: payment; }
        .status{ grid-area: status; }
        .action{ grid-area: action; }
        .email{ grid-area: email; }
        
      `}</style>
      
      <Header type={"PAGE"} name={"Order"} />
       
      <div className="w-full flex flex-col overflow-auto text-[12px] bg-Dashboard rounded-t-xl text-hover">
        <div className="header items-center border-b border-b-hover font-bold">
          <div className="col1 p-6"># ORDER</div>
          <div className="col2">PRODUCT</div>
          <div className="col3">DATE</div>
          <div className="col4">CATEGORY</div>
          <div className="col5">PAYMENT</div>
          <div className="col5">VARIENT</div>
          <div className="col6 flex items-center justify-center">STATUS</div>
          <div className="col7 ">USER EMAIL</div>
          <div className="col7 ">ACTION</div>
          
        </div>

        {Orders.length>=1?

          Orders.filter((item) => item)
          .map((item, i) => (
            <div id={'Slider'+i} key={item._id}  style={{}} className="bg-Dashboard text-hover header1 relative border-b  border-b-hover items-center justify-start text-2xl tracking-wide font-bold">
              <p  className="index p-6">#48534</p>
              <Image
                src="/t.png"
                width={40}
                height={20}
                className="image bg-hover rounded-lg w-[65px] h-[65px] p-2"
                alt={item.Product[0].title}
               
              />
              <p className="date ">11/23/2023</p>
              <Category Icon={MdOutlineDevices} Category={'Electronics'}/>
              <p className="payment">${item?.Product[0].totleprice}</p>
              <p className="varient flex gap-4">{item?.Product[0].varient.size}/{item.Product[0].varient.quantity} <span className={`px-4 py-4  bg-[${item?.Product[0].varient.color}]`}></span></p>
           <Status Status={item?.Status}/>
           
           <p className="email break-words">{User(item.User)}</p>
           <p className="action text-4xl flex items-center justify-center"><BsThreeDots /></p>
     
            </div>
          )):""}
      </div>
    </div>
  );
};

export default Order;






















