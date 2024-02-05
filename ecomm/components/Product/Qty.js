import { GlobleContext } from "@/Context/StateContext";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Qty = ({data}) => {
const [Press1,setPress1]=useState(false)
const [Press2,setPress2]=useState(false)
    const {Qtymin,Qtyplu,qty,setProductCardCart,ProductCardCart}=GlobleContext()
    const pickQty=(quantity)=>{
      setProductCardCart({...ProductCardCart,varient:{...ProductCardCart.varient,quantity:quantity},totleprice:data.price*qty})
       }
       const PressStayle1 = {
            background: Press1?'#222222':'#e2e2e2',
            color:Press1?'#e2e2e2':'#222222'
          }
       const PressStayle2 = {
            background: Press2?'#222222':'#e2e2e2',
            color:Press2?'#e2e2e2':'#222222'
          }
  return (
    <div className="flex w-[13rem] text-Dashboard rounded-sm border h-[3rem] border-hover mt-2 justify-between items-center">
     
      <button
        onClick={() => {
          Qtyplu();
          pickQty(qty+1);
    
        }} 
        onMouseDown={()=>setPress1(true)}
        onMouseUp={()=>setPress1(false)}
        style={PressStayle1}
        className="flex items-center justify-center text-2xl font-bold hover:bg-hover h-full w-[25%] border-r-[1px] border-hover"
      >
        <AiOutlinePlus />
      </button>
      <p className="text-xl ">{qty}</p>
      <button
        onClick={() => {
          Qtymin()
          pickQty(qty+1)
          
        }}
        onMouseDown={()=>setPress2(true)}
        onMouseUp={()=>setPress2(false)}
        style={PressStayle2}
        className="flex items-center justify-center text-2xl font-bold hover:bg-hover h-full w-[25%] border-l-[1px] border-hover"
      >
        <AiOutlineMinus />
      </button>
    </div>
  );
};

export default Qty;
