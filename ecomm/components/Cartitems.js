import React from "react";
import { urlFor } from "@/lib/client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { GlobleContext } from "@/Context/StateContext";

const Cartitem = ({ data }) => {
  const { TotleCartQty, RemoveProduct } = GlobleContext();
  console.log(data)
  return (

    <div key={data._id} className="flex w-[100%] h-[8rem] p-2  rounded-xl">
      <div className="w-[27%] h-full flex items-center justify-center">
        <img
          className="bg-hover rounded-xl object-contain w-full h-full"
          src={data.image.src}
          alt={data.title}
        />
      </div>

      <div className="w-[70%] h-full justify-between items-center py-2">
        <div className="flex flex-row h-[60%] items-start justify-between px-2">
          <h3 className="text-2xl font-semibold text-[black]">{data.title}</h3>
          <h3 className="text-2xl font-semibold text-[black]">${data.price}</h3>
        </div>
        <div className="flex flex-row h-[40%] items-center justify-between px-2">
          <div className="flex text-Dashboard w-[8rem] rounded-sm border h-[2.5rem] border-hover justify-between items-center">
            <button
              onClick={() => TotleCartQty(data, "inc")}
              className="flex items-center justify-center text-2xl font-bold hover:bg-hover h-full w-[30%] border-r-[1px] border-hover"
            >
              <AiOutlinePlus />
            </button>
            <p className="text-xl">{data.varient.quantity}</p>
            <button
              onClick={() => TotleCartQty(data, "dec")}
              className="flex items-center justify-center text-2xl font-bold hover:bg-hover h-full w-[30%] border-l-[1px] border-hover"
            >
              <AiOutlineMinus />
            </button>
          </div>
          <p className="text-xl font-semibold">{data.varient.size}</p>
          <p className="text-xl font-semibold">{data.varient.color}</p>
          <button
            type="button"
            data-tooltip-id={`Toole_tip_Cart_delet_Product_${data._id}`}
              data-tooltip-content="Delete"
            className="text-3xl text-Red"
            onClick={() => RemoveProduct(data)}
          >
            <MdOutlineCancel />
            <ReactTooltip id={`Toole_tip_Cart_delet_Product_${data._id}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
