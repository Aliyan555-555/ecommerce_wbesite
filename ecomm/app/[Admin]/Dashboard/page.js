"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SlSettings } from "react-icons/sl";
import { GiCheckMark } from "react-icons/gi";
import { Apps, Dashboard_routes, ThemeColors } from "@/Constants";
import Overview from "@/components/Dashboard/Overview";
import SidebarCom from "@/components/Dashboard/Sidebar";
import Order from "@/components/Dashboard/Order";
import User from "@/components/Dashboard/User";
import Setting from "@/components/Dashboard/Setting";
// import history from "@/lib/history";
import Skeleton from "../../../components/Dashboard/Colors";
import Calender from "@/components/Dashboard/Calender";
import Product from "@/components/Dashboard/Product";
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { Roboto } from 'next/font/google'
import Loading from "@/components/Dashboard/Loading";
import Link from "next/link";
import RightLayout from "@/components/Dashboard/RightLayout";
const roboto = Roboto({
  weight: ['400','300','500','900', '700'],
  subsets: ['latin'],
})
const page = (props) => {
  
  const [theme, settheme] = useState(false);
  const [Sidebar,setSidebar] = useState(true)
  const [Orders,setOrders] = useState([])
  const router = useRouter();
  const Left= Sidebar?"flex-row":'flex-row-reverse';
  const Radio1=Sidebar?MdOutlineRadioButtonChecked:MdOutlineRadioButtonUnchecked;
  const Radio2=Sidebar?MdOutlineRadioButtonUnchecked:MdOutlineRadioButtonChecked;
useEffect(()=>{
  if(props.params.Admin != '654689e4fb7e5478e0862ae8'){
    router.push("/")
  }
  document.title = "Prime Corner Dashboard"
})
 
  const ThemeSlider = () => {
    if (theme) {
      settheme(false);
    } else {
      settheme(true);
    }
  };
  const ThemeStyle = {
    right: `${theme ? "0" : "-30%"}`,
  };
  const SidebarLeft =()=>{
    setSidebar(true)
  }
  const SidebarRight =()=>{
    setSidebar(false)
  }

 
  return (
    <Suspense fallback={<Loading/>}>
    {/* <BrowserRouter> */}
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
        .Navbar {
          display: none;
        } 
        *{
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
      <div className={`${roboto.className} box-border  relative ${Left} antialiased flex w-full h-screen bg-body p-6 gap-6 rounded-lg overflow-hidden`}>
        <button
          className="absolute bottom-10 right-10 text-6xl p-4 bg-[#1a1515] rounded-full z-[10000000000]"
          onClick={ThemeSlider}
        >
          <SlSettings />
        </button>
        <div
          className="p-8 sm:w-[25%]  h-full fixed right-[-30%] top-0 bg-hover transition-all duration-500"
          style={ThemeStyle}
        >
          <div className="flex w-full flex-col  text-Dashboard gap-4 py-8">
            <h4 className="text-3xl font-bold">Sidebar</h4>
           <div className="flex gap-4 items-center cursor-pointer" onClick={SidebarLeft}>
            <Radio1 className="text-4xl"/>
           <span className="text-2xl font-normal">Left</span>
           </div>
           <div className="flex gap-4 items-center cursor-pointer" onClick={SidebarRight}>
            <Radio2 className="text-4xl"/>
            <span className="text-2xl font-normal">Right</span>
           </div>
          
          </div>
          <div className="flex gap-4 ">
            {ThemeColors.map((item, i) => (
              <div
                key={i}
                className="flex w-[4rem] h-[4rem] items-center justify-center"
              >
                <div className="absolute top-auto left-auto text-4xl text-Dashboard-border">
                  <GiCheckMark />
                </div>
                <div
                  className="w-1/2 h-full rounded-s-full"
                  style={{ background: item.Color1 }}
                ></div>
                <div
                  className="w-1/2 h-full rounded-e-full"
                  style={{ background: item.Color2 }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="h-[99%]  w-[15%] bg-Dashboard rounded-2xl flex flex-col">
          <div className="w-full h-[8rem] flex items-center justify-center relative ">
            <Image
              src={"/Logo_white.png"}
              width={130}
              height={100}
              alt="Prime Corner"
            
            />
          </div>
          <div className="w-full h-[40%] flex flex-col  gap-4 p-4 text-hover">
            <h2 className="px-6 text-3xl font-extrabold" style={{textAlign:Sidebar?'left':'right'}}> Menu</h2>
            {Dashboard_routes.map((item) => {
              return (
                <Link 
                  href={props.params.Admin+item.href}
                  className="w-full pl-6 h-[5.5rem] rounded-md flex items-center gap-6 justify-start"
                  key={item.id}
                  style={{flexDirection:Sidebar?'row':'row-reverse'}}
                >
                  <item.icon className="text-4xl cursor-pointer" />
                  <h2 className="text-2xl text-left font-semibold cursor-pointer">
                    {item.name}
                  </h2>
                </Link>
              );
            })}
          </div>
          <div className="w-full gap-4 flex flex-col p-4 text-hover">
            <h2 className="px-6 text-3xl font-extrabold" style={{textAlign:Sidebar?'left':'right'}}>Apps</h2>
            {Apps.map((item) => (
              <button 
                to={item.href}
                className="w-full pl-6 py-3 flex items-center gap-6 justify-start"
                key={item.id}
                style={{flexDirection:Sidebar?'row':'row-reverse'}}
              >
                <item.icon className="text-4xl cursor-pointer" />
                <h2 className="text-2xl text-left font-semibold cursor-pointer">
                  {item.name}
                </h2>
              </button> 
            ))}
          </div>
        </div> */}
        <SidebarCom Admin = {props.params.Admin}/>

        {/* <div className="w-[85%] bg-body h-[99%] rounded-2xl subpixel-antialiased"> */}
          {/* <Routes history={history}>
            <Route path={`/${props.params.Admin}/Dashboard/`} element={<Overview position={Sidebar}/>} />
            <Route path={`/${props.params.Admin}/Dashboard/Order`} element={<Order/>} />
            <Route path={`/${props.params.Admin}/Dashboard/Customers`} element={<User />} />
            <Route path={`/${props.params.Admin}/Dashboard/Products`} element={<Product />} />
            <Route path={`/${props.params.Admin}/Dashboard/Setting`} element={<Setting />} />
            <Route path={`/${props.params.Admin}/Dashboard/Color`} element={<Skeleton />} />
            <Route path={`/${props.params.Admin}/Dashboard/Calender`} element={<Calender />} />
          </Routes> */}
          <RightLayout>
            <Overview/>
          </RightLayout>
        {/* </div> */}
      </div>
    {/* </BrowserRouter> */}
    </Suspense>
  );
};

export default page;
