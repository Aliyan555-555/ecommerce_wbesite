"use client";
import React, { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";


function Admin (props){
  
  const router = useRouter();


  useEffect(() => {
    if (props.Admin === '654689e4fb7e5478e0862ae8') {
      router.push("/654689e4fb7e5478e0862ae8/Dashboard");
    }else if (props.Admin != '654689e4fb7e5478e0862ae8'){
      router.push("/");
    }
  },[])
  return (
   <div>

   </div>
  );
};

export default Admin;
