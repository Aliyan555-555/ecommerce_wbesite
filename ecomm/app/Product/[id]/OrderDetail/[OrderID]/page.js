"use client";
import { GlobleContext } from "@/Context/StateContext";
import { urlFor } from "@/lib/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import Link from "next/link";

function page(){

  const [OrdersDetails, setOrdersDetails] = useState({});
  const parems = useParams();
  const OrderData = async () => {
    const res = await fetch("/api/Orders", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setOrdersDetails(data);
  };
  useEffect(() => {
    OrderData();
  }, []);

  // console.log(OrdersDetails.Orders?.find((item) => item.OrderID === parems.OrderID));
  return (
    <div
      style={{ backgroundImage: "url('/OrderDetailbg.png')" }}
      className="bg-cover flex-col bg-center w-full h-screen flex items-center justify-center"
    >
      <style jsx global>
        {`
          .Navbar {
            display: none;
          }
        `}
      </style>
      <div className="w-full flex flex-col items-center justify-center">
        <img src="/Logo_white.png" className="w-[200px] py-8" />
        <h1 className="text-7xl flex-nowrap text-[black] font-bold flex pb-12">
          <span className="text-body flex">Thank You</span> For Purchasing
        </h1>
      </div>
      <div className="w-[850px] h-[450px] rounded-2xl bg-body flex p-6">
        {OrdersDetails.Orders?.filter(
          (item) => item.OrderID === parems.OrderID
        ).map((item) => {
          return (
            <>
              <div
                className="w-full uppercase h-full text-Dashboard-border flex flex-col gap-8 "
                key={item.OrderID}
              >
                <div className="w-full flex flex-col border rounded-2xl border-Dashboard-border">
                  <div className="w-full text-2xl border-b border-b-Dashboard-border rounded-t-2xl font-semibold bg-hover text-Dashboard p-6">
                    <p>Tanks Your Order has been received</p>
                  </div>
                  <div className="rounded-b-2xl flex text-xl ">
                    <div className="items-start border-r border-r-Dashboard-border w-[25%] justify-center text-left flex flex-col px-4 py-8">
                      <p>Order ID</p>
                      <p>{item.OrderID}</p>
                    </div>
                    <div className="items-start border-r border-r-Dashboard-border w-[25%] justify-center text-left flex flex-col px-4 py-8">
                      <p>Date</p>
                      <p>{item.Date}</p>
                    </div>
                    <div className="items-start border-r border-r-Dashboard-border w-[25%] justify-center text-left flex flex-col px-4 py-8">
                      <p>SubTotle Price</p>
                      <p>$
                        {item.Product[0].price *
                          item.Product[0].varient.quantity}
                      </p>
                    </div>
                    <div className="items-start w-[25%] justify-center text-left flex flex-col px-4 py-8">
                      <p>Status</p>
                      <p>{item.Status}</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col border h-[300px] rounded-2xl border-Dashboard-border">
                  <div className="py-4 px-4 bg-hover text-Dashboard rounded-t-2xl">
                    <h3 className="text-2xl font-semibold">Order Details</h3>
                  </div>
                  <div className="w-full rounded-b-2xl p-6 flex h-[100%] ">
                    <div className="w-[75%]  flex h-[100%]">
                      <div>
                        <p className="text-xl py-4 font-semibold text-Dashboard">
                          Product:<span>{item.Product[0].title}</span>
                        </p>
                        <p className="text-xl py-4 font-semibold text-Dashboard">
                          Size:<span>{item.Product[0].varient.size}</span>
                        </p>
                        <p className="text-xl py-4 font-semibold text-Dashboard">
                          Quantity :
                          <span className="lowercase">({item.Product[0].varient.quantity})item</span>
                        </p>
                        <p className="text-xl py-4 font-semibold text-Dashboard flex items-center">
                          Color:
                          <span
                            style={{
                              background: item.Product[0].varient.color,
                            }}
                            className="mx-4 w-7 h-7 rounded-full"
                          ></span>
                        </p>
                      </div>
                      <div className="px-8">
                        
                        <p className="text-xl py-4 font-semibold text-Dashboard">
                          Billing address :<span>{item.Product[0].price}</span>
                        </p>
                        <p className="text-xl py-4 font-semibold text-Dashboard">
                          Shipping address :<span>{item.Product[0].price}</span>
                        </p>
                        <p className="text-xl py-4 font-semibold text-Dashboard">
                          Delivery fee :$<span>{item.Product[0].price}</span>
                        </p>
                        <p className="text-xl py-4 font-semibold text-Dashboard">
                          Price :$<span>{item.Product[0].price}</span>
                        </p>
                        <p className="text-xl py-4 font-semibold text-Dashboard">
                          SubTotle Price :$
                          <span>
                            {item.Product[0].price *
                              item.Product[0].varient.quantity}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="w-1/4 h-[100%] flex justify-end">
                      <img
                      
                        className={`w-full rounded-2xl h-[90%] bg-hover`}
                        src={urlFor(
                          item.Product[0].image && item.Product[0].image
                        )}
                        alt={item.Product[0].title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
     
      <Link href={'/'}>
      <button className="px-4 py-5 mt-6 text-2xl font-extrabold text-theme bg-body rounded-xl">Continue Shopping</button> </Link>
    </div>
  );
};

export default page;
