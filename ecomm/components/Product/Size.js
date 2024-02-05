import { GlobleContext } from '@/Context/StateContext';
import React, { useEffect, useRef, useState } from 'react'

const Size = ({data}) => {
  const {sizes}=data
const {pickQuickSize,ProductCardCart,setProductCardCart,setpickQuickSize}=GlobleContext()
    const SizeRef1 = useRef(null);
  const SizeRef2 = useRef(null);
  const SizeRef3 = useRef(null);
  const SizeRef4 = useRef(null);
  const SelectSize1 = () => {
    if (SizeRef1.current.classList.contains("bg-hover")) {
      SizeRef1.current.classList.remove("bg-hover");
      SizeRef1.current.classList.add("bg-[#000]");
      SizeRef1.current.classList.add("text-[#fff]");
      SizeRef2.current.classList.remove("bg-[#000]");
      SizeRef2.current.classList.remove("text-[#fff]");
      SizeRef2.current.classList.add("bg-hover");
      SizeRef3.current.classList.add("bg-hover");
      SizeRef4.current.classList.add("bg-hover");
      SizeRef3.current.classList.remove("bg-[#000]");
      SizeRef3.current.classList.remove("text-[#fff]");
      SizeRef4.current.classList.remove("bg-[#000]");
      SizeRef4.current.classList.remove("text-[#fff]");
    }
  };
  const SelectSize2 = () => {
    if (SizeRef2.current.classList.contains("bg-hover")) {
      SizeRef2.current.classList.remove("bg-hover");
      SizeRef2.current.classList.add("bg-[#000]");
      SizeRef2.current.classList.add("text-[#fff]");
      SizeRef1.current.classList.remove("bg-[#000]");
      SizeRef1.current.classList.remove("text-[#fff]");
      SizeRef1.current.classList.add("bg-hover");
      SizeRef3.current.classList.add("bg-hover");
      SizeRef4.current.classList.add("bg-hover");
      SizeRef3.current.classList.remove("bg-[#000]");
      SizeRef3.current.classList.remove("text-[#fff]");
      SizeRef4.current.classList.remove("bg-[#000]");
      SizeRef4.current.classList.remove("text-[#fff]");
    }
  };
  const SelectSize3 = () => {
    if (SizeRef3.current.classList.contains("bg-hover")) {
      SizeRef3.current.classList.remove("bg-hover");
      SizeRef3.current.classList.add("bg-[#000]");
      SizeRef3.current.classList.add("text-[#fff]");
      SizeRef2.current.classList.remove("bg-[#000]");
      SizeRef2.current.classList.remove("text-[#fff]");
      SizeRef2.current.classList.add("bg-hover");
      SizeRef1.current.classList.add("bg-hover");
      SizeRef4.current.classList.add("bg-hover");
      SizeRef1.current.classList.remove("bg-[#000]");
      SizeRef1.current.classList.remove("text-[#fff]");
      SizeRef4.current.classList.remove("bg-[#000]");
      SizeRef4.current.classList.remove("text-[#fff]");
    }
  };
  const SelectSize4 = () => {
    if (SizeRef4.current.classList.contains("bg-hover")) {
      SizeRef4.current.classList.remove("bg-hover");
      SizeRef4.current.classList.add("bg-[#000]");
      SizeRef4.current.classList.add("text-[#fff]");
      SizeRef2.current.classList.remove("bg-[#000]");
      SizeRef2.current.classList.remove("text-[#fff]");
      SizeRef2.current.classList.add("bg-hover");
      SizeRef3.current.classList.add("bg-hover");
      SizeRef1.current.classList.add("bg-hover");
      SizeRef3.current.classList.remove("bg-[#000]");
      SizeRef3.current.classList.remove("text-[#fff]");
      SizeRef1.current.classList.remove("bg-[#000]");
      SizeRef1.current.classList.remove("text-[#fff]");
    }
  };
  const AllSizeRef = [SizeRef1, SizeRef2, SizeRef3, SizeRef4];
  const AllSizefun = [SelectSize1, SelectSize2, SelectSize3, SelectSize4];

useEffect(()=>{
SizeRef1.current?.classList.remove("bg-hover");
SizeRef1.current?.classList.add("bg-[#000]");
SizeRef1.current?.classList.add("text-[#fff]");
},[])
const Size=(item)=>{
  // setpickQuickSize(item)
  setProductCardCart({
    ...ProductCardCart,
    varient: { ...ProductCardCart.varient, size: item },
  });
}
  return (
    <div className="flex flex-row gap-2 mt-2">
    {data.sizes?.map((item, i) => {

      return (
        <span
        key={item}
          ref={AllSizeRef[i]}
          onClick={()=>{
            AllSizefun[i]();
            Size(item)  
          }}
          className="px-5 transition-colors duration-500 py-2 rounded text-Dashboard bg-hover flex items-center cursor-pointer justify-center text-[1.2rem]  font-[600] border border-hover hover:border-Dashboard "
        >
          {item}
        </span>
      );
    })}
  </div>
  )
}

export default Size
