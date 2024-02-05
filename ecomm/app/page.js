"use client"
import React from "react";
import Banner from "@/components/Banner";
import SmallBanner from "@/components/SmallBanner";
import { GlobleContext } from "@/Context/StateContext";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Catagories from "@/components/Catagories";
// import HomeOne from "./pages/name";

  const Home = (props) => {
  const {Banners,Products}=GlobleContext() 
  return (
    <div className="w-full">
      <Banner BannerData={Banners} main={true}/>
      <Catagories/>
      <SmallBanner Products={Products}/>
      <Services/>
      <Footer/>
     
    </div> ) 
}


export default Home;
