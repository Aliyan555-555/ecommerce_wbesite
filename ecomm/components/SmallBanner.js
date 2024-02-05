"use client";
import React, { useEffect } from "react";
import Product from "./Product";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const SmallBanner = ({ Products }) => {
  const [win, setwin] = useState();
  const btn1ref = useRef();
  const btn3ref = useRef();
  const btn2ref = useRef();
  const [SelectedTab1, setSelectedTab1] = useState(false);
  const [SelectedTab2, setSelectedTab2] = useState(false);
  const [SelectedTab3, setSelectedTab3] = useState(false);
  // const FliterProducts = (qury) => {
  //   if (qury === "New Arrival") {
  //     btn1ref.current.style.borderBottomColor = "#222222";
  //     btn1ref.current.style.color = "#222222";
  //     btn2ref.current.style.color = "#e2e2e2";
  //     btn3ref.current.style.color = "#e2e2e2";
  //     btn3ref.current.style.borderBottomColor = "#e2e2e2";
  //     btn2ref.current.style.borderBottomColor = "#e2e2e2";
  //   } else if (qury === "Best Salles") {
  //     btn2ref.current.style.color = "#222222";
  //     btn3ref.current.style.color = "#e2e2e2";
  //     btn1ref.current.style.color = "#e2e2e2";
  //     btn2ref.current.style.borderBottomColor = "#222222";
  //     btn3ref.current.style.borderBottomColor = "#e2e2e2";
  //     btn1ref.current.style.borderBottomColor = "#e2e2e2";
  //   } else if (qury === "On Sale") {
  //     btn3ref.current.style.color = "#222222";
  //     btn2ref.current.style.color = "#e2e2e2";
  //     btn1ref.current.style.color = "#e2e2e2";
  //     btn2ref.current.style.borderBottomColor = "#e2e2e2";
  //     btn1ref.current.style.borderBottomColor = "#e2e2e2";
  //     btn3ref.current.style.borderBottomColor = "#222222";
  //   }
  // };
  const hendle = (TabNo) => {
    if (TabNo === 1) {
      setSelectedTab1(true);
      setSelectedTab2(false);
      setSelectedTab3(false);
    } else if (TabNo === 2) {
      setSelectedTab2(true);
      setSelectedTab1(false);
      setSelectedTab3(false);
    } else if (TabNo === 3) {
      setSelectedTab3(true);
      setSelectedTab1(false);
      setSelectedTab2(false);
    }
  };

  useEffect(() => {
    setwin(window);
  });

  return (
    <div className="w-full min-h-[90vh]">
      <style jsx global>{`
      #tab1::after{
        content: "";
        height: 1.7px;
        width: 0%;
        background: #222222;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width .4s ease;
      
      }
      #tab1::after{
        width: ${SelectedTab1 ? "100%" : "0"} !important;
      }
      #tab1{
        color: ${SelectedTab1 ? "#222222" : "#9b9a9a"};
      }
      #tab2{
        color: ${SelectedTab2 ? "#222222" : "#9b9a9a"};
      }
      #tab3{
        color: ${SelectedTab3 ? "#222222" : "#9b9a9a"};
      }
      #tab2::after{
        width: ${SelectedTab2 ? "100%" : "0"} !important;
      }
      #tab3::after{
        width: ${SelectedTab3 ? "100%" : "0"} !important;
      }
      #tab1:hover::after{
        width: 100%;
      }
      #tab2::after{
        content: "";
        height: 1.7px;
        width: 0%;
        background: #222222;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width .4s ease;
      
      }
      #tab2:hover::after{
        width: 100%;
      }
      #tab3::after{
        content: "";
        height: 1.7px;
        width: 0%;
        background: #222222;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: width .4s ease;
      
      }
      #tab3:hover::after{
        width: 100%;
      }


      `}</style>
      <div className="text-center w-full h-[25rem] sm:w-[90%] flex flex-col items-center justify-center sm:mx-auto">
        <h2 className="text-6xl font-extrabold text-Dashboard">
          Store Overview
        </h2>

        <div className="w-full h-14 text-Dashboard-border text-2xl font-bold mt-12">
          <button
            ref={btn1ref}
            onClick={() => hendle(1)}
            className=" py-6 relative hover:text-Dashboard transition-colors duration-300 w-[24rem] text-center"
            id="tab1"
          >
            New Arrivals
          </button>
          <button
            ref={btn2ref}
            onClick={() => hendle(2)}
            className=" py-6 relative hover:text-Dashboard transition-all duration-300 w-[24rem] text-center"
            id="tab2"
          >
            Best Selles
          </button>
          <button
            ref={btn3ref}
            onClick={() => hendle(3)}
            className=" py-6 relative hover:text-Dashboard transition-colors duration-300 w-[24rem] text-center"
            id="tab3"
          >
            On Sale
          </button>
        </div>
      </div>
      <div className="product-box flex w-full md:w-[97%] lg:w-[90%] xl:w-[85%]  justify-center flex-wrap md:mx-auto max-[850px]:w-full max-[850px]:mx-0">
        <Swiper
        // style={{overflow:"visible",width:'100%'}}
          spaceBetween={0}
          slidesPerView={win?.innerWidth > 640 ? 4 : 2}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-full"
      
          // className=""
        >
          {Products.filter((item) => item)?.map((data) => (
            <SwiperSlide key={data._id}>
              <div className="w-[75%]  min-[300px]:h-auto min-[400px]:h-auto min-[300px]:w-[50%]  min-[400px]:w-[40%] sm:w-auto">
                <Product data={data} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SmallBanner;
