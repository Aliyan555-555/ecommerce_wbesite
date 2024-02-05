import React from "react";

const Popup = ({Text,ButtonText1,ButtonText2,disable,setdisable,ButtonText1Fun,ButtonText2Fun,}) => {
  return (
    <div style={{ display: disable ?"flex":  "none"  }} 
    onClick={() => {
      setdisable(false);
    }} className="z-[4000] text-2xl w-screen fixed top-0 left-0 h-screen bg-[#000000bb] flex items-center justify-center">
      <div
        style={{
          boxShadow:
            "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
        }}
        className="w-1/3 h-80 bg-body rounded-2xl flex flex-col py-8 px-6 gap-10 items-center justify-center "
      >
        <p className="text-Dashboard">{Text}</p>
        <div className="w-full flex gap-4 items-center justify-around">
          <button onClick={ButtonText1Fun} className="px-24 w-[40%] p-6  font-normal bg-theme text-body hover:text-Dashboard rounded-lg">
            {ButtonText1}
          </button>
          <button onClick={ButtonText2Fun} className="px-24 p-6 w-[40%]  font-normal bg-Red text-body hover:text-Dashboard rounded-lg">
            {ButtonText2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
