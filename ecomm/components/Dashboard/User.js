import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-grid-system";
import { Userfileds } from "@/Constants";
import EnhancedTable from "./Table";
import { useEffect } from "react";
import { useState } from "react";
const User = () => {
  const [Users, setUsers] = useState([]);
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
    UserData()
  },[])
  return (
    <div className="w-full h-full p-[2rem] flex gap-4 flex-col">
      <h2 className="text-4xl text-Dashboard font-extrabold ">Customers</h2>
      <h6 className="text-xl text-hover mb-8 px-[1px] ">PAGE</h6>
      <div className="w-full flex flex-col text-xl overflow-auto">
      <EnhancedTable  data={Users}/>
 
      </div>
    </div>
  );
};

export default User;
