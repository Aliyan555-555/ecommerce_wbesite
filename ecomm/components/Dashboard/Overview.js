import { economy } from "@/Constants";
import React from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import Example from "./Graphe";
import { useRouter } from "next/navigation";
// import { Link } from "react-browser-router";
import CircleChart from "./CircleChart";

const Overview = ({ position }) => {
  return (
    <div className="flex flex-col w-full h-[100%] px-8  overflow-y-scroll overflow-x-hidden">
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
        
      `}</style>
      <header className="flex w-full h-[6rem] justify-between items-end  text-Dashboard">
        <h1 className="text-3xl font-bold">Analytics Overview</h1>
        <div className="flex flex-row w-[50%]">
          <input
            type="text"
            className="outline-none bg-hover w-full px-5 py-4 text-xl rounded-s-xl"
            placeholder="Search"
          />
          <button className="px-5 py-4 text-3xl text-hover bg-Dashboard rounded-e-xl">
            <BiSearch />
          </button>
        </div>
        <button className="bg-hover p-3 text-4xl rounded-full">
          <BiBell />
        </button>
      </header>
      <div className="flex w-full h-[90%] gap-6">
        <div
          className="w-[75%] h-full flex flex-col
          pt-8 gap-6"
        >
          <div className="w-full  gap-4 flex">
            {economy.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{ color: item.color }}
                  className={`w-1/4 h-[13rem] border-2 border-Dashboard-border  bg-body rounded-xl text-[${item.color}] flex flex-col`}
                >
                  <div className="flex h-1/2  items-center  justify-between px-4 ">
                    <item.icon className="text-6xl" />
                    <h3 className="text-2xl">{item.profit_percent}</h3>
                  </div>
                  <div className="h-1/2  flex flex-col justify-center  px-4">
                    <h3 className="text-3xl font-bold">{item.price}</h3>
                    <p className="text-xl">{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="">
            <Example />
          </div>
          <div className="w-full border-2 border-Dashboard-border rounded-xl text-Dashboard">
            <div className="w-full flex flex-col">
              <div className="w-full flex items-center justify-between  px-12 py-10">
                <h2 className="text-3xl font-bold ">Latest Orders</h2>
                <a href={"/Admin/Dashboard/Order"}>
                  <button
                    type="button"
                    className="px-8 py-4 rounded-xl text-2xl bg-Dashboard text-hover"
                  >
                    See ALL Orders
                  </button>
                </a>
              </div>
              <div className="w-full flex items-center justify-between px-10 text-xl py-4">
                <span>date</span>
                <span>Billing Name</span>
                <span>Amount</span>
                <span>Status</span>
              </div>
              <div className="w-full flex flex-col gap-2 py-4">
                {[1, 1, 1].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="w-full flex items-center h-[5.5rem] hover:bg-hover  active:bg-hover  justify-between px-10 text-2xl font-semibold "
                    >
                      <span>date</span>
                      <span>Billing Name</span>
                      <span>Amount</span>
                      <span>Status</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[25%] h-full pt-8">
          <CircleChart />
        </div>
      </div>
    </div>
  );
};

export default Overview;
