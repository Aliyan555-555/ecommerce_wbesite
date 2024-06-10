"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn, signOut, useSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";

import Link from "next/link";
import loading from "../loading";
function Signin (){
  const Authenticated =async()=>{
    const res = await fetch('/api/googlejwt',{
      method:'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session),
    })
    const response=await res.json()
    if (response.message==='User alrady Login'){
    //  toast.warning('You are alrady Login')
    //  router.push('/')
    }
else if (response.message==='Login in success') {
     if (session) {
       setTimeout(() => {
         setloaging(false)

      // toast.success('Login in success full')
      // router.push('/')
       }, 500);

     }
    }else if(response.message==='Login in success User alrady in databasce'){
     setTimeout(() => {
       setloaging(false)
    // toast.success('Login in success fully with google')
    // router.push('/')
     }, 100);

    }
  }
  const [loaging, setloaging] = useState(false);
  const session = useSession();
  const router = useRouter();
  const [data, setdata] = useState({ email: "", password: "" });
console.log(session)
  const GoogleLogin = async (e) => {
    setloaging(true)
    e.preventDefault();
  if (session.status === "unauthenticated") {
    //  signIn("google");
    const googlePopup = window.open('/api/auth/signin/google/', 'google-signin-popup', 'width=450,height=500');
    
             
         try {
           setInterval(() => {
              if (googlePopup && session.status === 'authenticated') {
                googlePopup.close();
              }
           if (session.status === 'authenticated') {
               Authenticated();
              }
           }, 200);
        
          
          setloaging(false)
          if (googlePopup) {
            googlePopup.postMessage({ type: 'session:callback' }, window.location.origin);
          }
         } catch (error) {
          toast.error('Server error try again ')
          console.log(error.message)
         } }
         else{
          console.log(session)
         }

    };
    const hendleChangeEmail = (e) => {
      setdata({ ...data, email: e.target.value });
    };
    const hendleChangePassword = (e) => {
      setdata({ ...data, password: e.target.value });
    };
    const PostData = async (e) => {
      e.preventDefault();
  
      if (data.email === "" || data.password === "") {
        const email = document.getElementById("email");
        const emailLable = document.getElementById("emailLable");
        email.style.borderColor = "red";
        emailLable.style.color = "red";
        const password = document.getElementById("password");
        const passwordLable = document.getElementById("passwordLable");
        password.style.borderColor = "red";
        passwordLable.style.color = "red";
        toast.warning("invalid credential");
      }
  
      try {
        const res = await fetch("/api/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const Response = await res.json();
  
        if ((data.email === "", data.password === "")) {
          toast.warning("invalid credential");
        }
        if (Response.message === "Login success") {
          toast.success("Login success");
          router.push("/");
        } else if (Response.message === "invalid Credientials") {
        }
      } catch (error) {
        toast.error(error);
      }
  
  };
  useEffect(() => {
    if (session.status === "authenticated") {
      Authenticated()
      console.log('useFffect')
    }
   
  })
  return (
    <div className="w-full h-[95vh] flex items-center justify-center">
      <div className="w-full flex flex-col  md:flex-row-reverse md:w-[75%] h-[70%] rounded-2xl bg-[#fafafa]    items-center  justify-center sm:gap-16">
        <Image
          src="/login1.svg"
          width={"500"}
          height={"500"}
          className="w-[50%] h-[100%] object-contain"
          alt="Login"
        />
        <form
          method="POST"
          className="flex flex-col w-[35%] h-full items-start justify-center  gap-12"
        >
          <h2 className="text-7xl font-[900]  mb-8 ">Sign in</h2>
          <div className="relative w-full flex flex-col">
            <input
              type="text"
              id="email"
              onChange={hendleChangeEmail}
              className="border-hover bg-[#00000000] text-[black] text-2xl transition-colors outline-none border-b py-5  peer focus:border-b-2 focus:border-theme valid:border-b-2  valid:border-theme font-normal"
              autoComplete="off"
              required
            />
            <label
              id="emailLable"
              htmlFor="email"
              className="text-[black] cursor-text absolute top-5 left-4 text-2xl  peer-focus:text-xl peer-focus:-top-3 font-normal peer-focus:text-theme peer-valid:text-xl  peer-valid:text-theme peer-valid:-top-3"
            >
              Email
            </label>
          </div>

          <div className="relative w-full flex flex-col">
            <input
              type="text"
              id="password"
              onChange={hendleChangePassword}
              className="border-hover font-normal bg-[#00000000] text-[black] text-2xl transition-colors outline-none border-b py-5  peer focus:border-b-2 focus:border-theme valid:border-b-2  valid:border-theme"
              autoComplete="off"
              required
            />
            <label
              htmlFor="password"
              id="passwordLable"
              className="text-[black] cursor-text absolute top-5 left-4 text-2xl  peer-focus:text-xl peer-focus:-top-3 font-normal peer-focus:text-theme peer-valid:text-xl  peer-valid:text-theme peer-valid:-top-3"
            >
              Password
            </label>
          </div>
          <div className="flex gap-10">
            <button
              type="button"
              className="px-12 py-6 border-0 scale-90  rounded-xl outline-none bg-theme text-hover text-2xl font-bold active:scale-100"
              onClick={PostData}
            >
              Login
            </button>
          
            <button
            disabled={session.status === "authenticated"}
              type="button"
              className="p-6 cursor-pointer gap-8 flex items-center scale-90 justify-between border-0 rounded-xl outline-none bg-hover text-[black] text-[1.50rem] font-light active:scale-100"
              onClick={GoogleLogin}
            >
              {loading ? (
                <Image
                  width={"20"}
                  height={"20"}
                  src={"/google.svg"}
                  alt="google"
                />
              ) : (
                <Image
                  width={"20"}
                  height={"20"}
                  src={"/Rolling.gif"}
                  alt="google"
                />
              )}
              <span>Google</span>
            </button>
          </div>

          <Link className="text-xl text-[black]" href={"/Signup"}>
            Create an account{" "}
            <span className="text-theme underline">Sign up</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
