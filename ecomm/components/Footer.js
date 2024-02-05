"use client";
import React from "react";
import MainButton from "./UI/MainButton";
import { PaymentGatway } from "@/Constants";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer-1 mt-[9rem] text-Dashboard relative bottom-0 w-full sm:h-[60rem] bg-hover py-8 sm:py-32">
      <div
        style={{ position: "relative" }}
        className="container mx-auto sm:px-4 min-[250px]:px-[2rem] "
      >
        <div className="flex flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 w-full min-[385px]:w-1/2  sm:w-1/3 md:w-1/4 xl:w-1/6">
            <h5 className="text-3xl font-bold mb-6">Features</h5>
            <ul className="list-none footer-links text-2xl">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:text-theme hover:border-theme"
                >
                  Cool stuff
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Random feature
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme  hover:text-theme"
                >
                  Team feature
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Stuff for developers
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Another one
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 max-[385px]:text-right w-full  min-[385px]:w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6  sm:mt-0">
            <h5 className="text-3xl font-bold mb-6">Resources</h5>
            <ul className="list-none footer-links text-2xl">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Resource
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Resource name
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Another resource
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 w-full  min-[385px]:w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/6  md:mt-0">
            <h5 className="text-3xl font-bold mb-6">About</h5>
            <ul className="list-none footer-links text-2xl">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Team
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Locations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Privacy
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 w-full  max-[385px]:text-right min-[385px]:w-1/2 sm:w-1/2 md:w-1/4 xl:w-1/6  md:mt-0">
            <h5 className="text-3xl font-bold mb-6">Help</h5>
            <ul className="list-none footer-links text-2xl">
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme  hover:text-theme"
                >
                  Support
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme  hover:text-theme"
                >
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="border-b border-solid border-[transparent] hover:border-theme hover:text-theme"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 max-[625px]:h-[150px]  max-[625px]:items-center  mt-4 w-full max-[385px]:item-center sm:w-1/3 flex flex-col xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
            <h5 className="font-bold mb-6 text-3xl sm:text-center xl:text-left">
              Stay connected
            </h5>
            <div className="flex sm:justify-center xl:justify-start">
              <a
                href=""
                className="w-14 h-14  text-4xl flex items-center transition-colors duration-400 justify-center border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-[white] hover:bg-[#4797ff] hover:border-[#4797ff]"
              >
               <FaFacebook />
              </a>
              <a
                href=""
                className="w-14 h-14 text-4xl flex items-center transition-colors duration-400 justify-center border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-[white] hover:bg-[#ff4181] hover:border-[#ff4181]"
              >
               <AiFillInstagram />
              </a>
              <a
                href=""
                className="w-14 h-14 text-4xl flex items-center transition-colors duration-400 justify-center border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-[white] hover:bg-[#4797ff] hover:border-[#4797ff]"
              >
                <FaTwitter />
              </a>
              <a
                href=""
                className="w-14 h-14 text-4xl flex items-center transition-colors duration-400 justify-center border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-[white] hover:bg-[red] hover:border-Red"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>

        <div className="flex h-[200px] sm:h-auto flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:items-center sm:flex-col border-t justify-around">
          <p className="text-xl text-center ">Copyright © 2023 Prime Corner. All rights reserved.</p>
          <div className="h-[90px] flex gap-2 flex-wrap max-[500px]:items-center max-[500px]:justify-center">
          {PaymentGatway.map((item)=>{
            return(
                <img key={item.id} 
                 src={item.src} alt={item.name} className="w-[40px] h-[40px] " />
            )
          
})}
          

          </div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
