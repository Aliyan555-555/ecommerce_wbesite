import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { HiDotsVertical, HiOutlineRefresh } from "react-icons/hi";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { IoMdSearch } from "react-icons/io";
import { RiDownloadLine } from "react-icons/ri";
const ProductSideBar = ({Products,hendleEditProduct,getProductsData,rotate,hendleRest,setSearch,Search}) => {
  return (
    <div className="w-[30%] relative h-full rounded-2xl pt-12  text-body bg-Dashboard justify-self-end">
      <style jsx global>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }

          .spin {
            animation: spin 1s linear infinite;
          }
        `}
      </style>
      <div  className="w-full flex justify-between items-center px-4 text-3xl">
       
        <h3 className="font-semibold">Product</h3>
        <div className="flex gap-4">
          <button
        
            data-tooltip-id="Refresh"
            data-tooltip-content="Refresh"
            onClick={() => getProductsData()}
            className={` pl-4 pb-4 pt-[.8rem] pr-[.8rem] rounded-md hover:bg-white-transparent`}
          >
            <ReactTooltip  id={"Refresh"} />
            <HiOutlineRefresh
              className={`${rotate ? "spin" : ""}  transition-all `}
            />
          </button>
          <button
            data-tooltip-id={`AddNewProduct`}
            data-tooltip-content="Add New Product"
            onClick={hendleRest}
            className="pl-4 pb-4 pt-[.8rem] pr-[.8rem] rounded-md hover:bg-white-transparent"
          >
            <ReactTooltip style={{ fontSize: "1.2rem" }} id={`AddNewProduct`} />
            <FaRegEdit />
          </button>
          <button className="p-4 rounded-md hover:bg-white-transparent">
            <HiDotsVertical />
          </button>
        </div>
      </div>
      <div className="flex relative w-full items-center justify-center mt-4">
        <IoMdSearch className="absolute text-body text-4xl left-8 " />
        <input
          type="text"
          placeholder="Search Product"
          onChange={(e) => setSearch(e.target.value)}
          className="w-[95%] text-body placeholder:text-body rounded-lg text-[1.5rem] bg-white-transparent py-3 px-2 pl-14"
        />
      </div>
      <div className="w-full pt-6">
        {Products &&  Products.length === 0 ? (
          <p className="text-center text-2xl text-Dashboard">No Product</p>
        ) : (
          Products.filter((item) => {
            
            if (Search === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(Search.toLowerCase())
            ) {
              return item;
            }
          }).map((item) => (
            <div
              key={item._id}
              onClick={(e) => hendleEditProduct(e, item)}
               
              className="w-full h-32 hover:bg-white-transparent flex items-center justify-between px-4"
            >
              <h3 className="text-2xl font-normal">{item.title}</h3>
              <div className="flex justify-between items-center text-3xl gap-4">
                <RiDownloadLine
                  data-tooltip-id={`Downloade_icon_${item._id}`}
                  data-tooltip-content="Publist Product"
                  className="text-Downloade"
                />
                
                <ReactTooltip
                  style={{ fontSize: "1.2rem" }}
                  id={`Downloade_icon_${item._id}`}
                />
                <ReactTooltip
                  style={{ fontSize: "1.2rem" }}
                  id={`Edit_icon_${item._id}`}
                />
               
                <CiEdit
                  data-tooltip-id={`Edit_icon_${item._id}`}
                  data-tooltip-content="Edit Product"
                  className="text-Rating"
                />
               
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductSideBar;
