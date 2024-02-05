"use client";
import emailjs from "@emailjs/browser";
import React, { useEffect } from "react";
import OtpInput from "otp-input-react";
import { useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";


const page = (props) => {
  
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  const [emailOTP, setemailOTP] = useState();
  const [send, setsend] = useState(false);
  const [loading,setloading]=useState(false)
console.log(props)
  var val = Math.floor(1000 + Math.random() * 9000);
  if (emailOTP === undefined) {
    setemailOTP(val);
  }
  if (OTP === emailOTP) {
    console.log("finelly");
  }
  useEffect(() => {
    if (props.Admin === '654689e4fb7e5478e0862ae8') {
      router.push("/654689e4fb7e5478e0862ae8/Dashboard");
    }else if (props.Admin != '654689e4fb7e5478e0862ae8'){
      router.push("/");
    }
  },[])
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-theme text-hover  gap-16">
       <style jsx global>{`
        .Navbar {
         display: none;
        }
      `}</style>
      <div className="text-6xl text-[#fff] font-bold flex gap-6 flex-col items-center justify-center">
        <p>
          Varify <span className="text-[#000]">Prime Corner</span> Admin
        </p>
        <BsFillShieldLockFill className="text-9xl" />
      </div>

      
    </div>
  );
};

export default page;
