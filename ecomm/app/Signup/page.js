"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const page = () => {
  const router = useRouter();
  const [data, setdata] = useState({ name: "", email: "", password: "" });
  const hendleChangeName = (e) => {
    setdata({ ...data, name: e.target.value });
  };
  const hendleChangeEmail = (e) => {
    setdata({ ...data, email: e.target.value });
  };
  const hendleChangePassword = (e) => {
    setdata({ ...data, password: e.target.value });
  };
  const Postdata = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
    
      if (response.message === "add new user") {
        router.push("/login");
        toast.success("Sign up Success");
      }
      if (response.message === "User alrady exist") {
        toast.warning("User alrady exist");
      }
      if (response.message === "invalid cridential") {
        toast.warning("invalid cridential");
      }
    } catch (error) {}
  };
  return (
    <div className="w-full h-[95vh] flex items-center justify-center">
      <div className="w-full flex flex-col  sm:flex-row-reverse sm:w-[75%] h-[70%] rounded-2xl bg-[#fafafa] items-center justify-center gap-16">
        <Image
          src="/download.svg"
          width={"300"}
          height={"300"}
          className="w-[50%] object-contain h-[80%]"
          alt="Sign up"
        />
        <form
          method="POST"
          className="flex flex-col w-[35%] h-full items-start justify-center  gap-10"
        >
          <h2 className="text-7xl font-[900]  mb-4 ">Sign up</h2>
          <div className="relative w-full flex flex-col">
            <input
              type="text"
              name="name"
              onChange={hendleChangeName}
              id="name"
              className="border-hover font-normal bg-[#00000000] text-[black] text-2xl transition-colors outline-none border-b py-5  peer focus:border-b-2 focus:border-theme valid:border-b-2  valid:border-theme"
              autoComplete="off"
              required
            />
            <label
              htmlFor="name"
              className="text-[black] cursor-text absolute top-5 left-4 text-2xl  peer-focus:text-xl peer-focus:-top-3 font-normal peer-focus:text-theme peer-valid:text-xl  peer-valid:text-theme peer-valid:-top-3"
            >
              Name
            </label>
          </div>

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
              className="text-[black] cursor-text absolute top-5 left-4 text-2xl  peer-focus:text-xl peer-focus:-top-3 font-normal peer-focus:text-theme peer-valid:text-xl  peer-valid:text-theme peer-valid:-top-3"
            >
              Password
            </label>
          </div>
          <button
            type="button"
            className="px-10 py-4 border-0 rounded-xl outline-none bg-theme text-hover text-2xl font-bold"
            onClick={Postdata}
          >
            Signup
          </button>
          <Link className="text-xl text-[black]" href={'/Signin'}>Alrady have an account <span className="text-theme underline">Sign in</span></Link>
        </form>
      </div>
    </div>
  );
};

export default page;
