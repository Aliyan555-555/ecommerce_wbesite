import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import Header from "./PageHeader"
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Color() {
  const [color, setColor] = useColor("#561ecb");
  console.log(color);
const [copy,setcopy]=useState(false)
setInterval(() => {
  setcopy(false)
}, 4000);
  return (
    <div className="w-full h-full flex flex-col">
     <Header type={"APP"} name={"Color Picker"} />
      <div className="w-[100%] h-[80%] justify-center items-center flex flex-col gap-12">
        <style jsx global>{`
          .preview {
            width: 100%;
            height: 70px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .preview::before {
            content: "";
            width: 90px;
            background-image: url(/pen1.png);
            position: absolute;
            left: 50px;
            height: 50px;
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
          }
          .preview::after {
            content: "";
            width: 300px;
            position: absolute;
            left: 138px;
            height: 44px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
            background: linear-gradient(
              0deg,
              ${color.hex} 0%,
              rgba(255, 255, 255, .8) 89%,
              ${color.hex} 100%
            );
          }
        `}</style>
        <div className="w-[50%] flex flex-col justify-center">
          <h3 className="h-[4rem] text-5xl text-center font-extrabold" style={{color:`${color.hex}`}}>{copy? color.hex :""}</h3>
        <CopyToClipboard text={color.hex}
          onCopy={() => setcopy(true)}>
        <div className="preview" onClick={()=>{toast.success("Coppied")}}></div>
        </CopyToClipboard>
          
          <ColorPicker color={color} onChange={setColor} />
        </div>
      </div>
    </div>
  );
}
