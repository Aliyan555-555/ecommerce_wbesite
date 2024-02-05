"use client"
import { Apps, Dashboard_routes } from '@/Constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Sidebar = ({Admin}) => {
  return (
    <div className="h-[99%]  w-[15%] bg-Dashboard rounded-2xl flex flex-col">
    <div className="w-full h-[8rem] flex items-center justify-center relative ">
      <Image
        src={"/Logo_white.png"}
        width={130}
        height={100}
        alt="Prime Corner"
      
      />
    </div>
    <div className="w-full h-[40%] flex flex-col  gap-4 p-4 text-hover">
      <h2 className="px-6 text-3xl font-extrabold" style={{textAlign:true?'left':'right'}}> Menu</h2>
      {Dashboard_routes.map((item) => {
        return (
          <Link 
            href={ "/"+Admin+item.href}
            className="w-full pl-6 h-[5.5rem] rounded-md flex items-center gap-6 justify-start"
            key={item.id}
            style={{flexDirection:true?'row':'row-reverse'}}
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
      <h2 className="px-6 text-3xl font-extrabold" style={{textAlign:true?'left':'right'}}>Apps</h2>
      {Apps.map((item) => (
        <Link 
          href={"/"+Admin+item.href}
          className="w-full pl-6 py-3 flex items-center gap-6 justify-start"
          key={item.id}
          style={{flexDirection:true?'row':'row-reverse'}}
        >
          <item.icon className="text-4xl cursor-pointer" />
          <h2 className="text-2xl text-left font-semibold cursor-pointer">
            {item.name}
          </h2>
        </Link> 
      ))}
    </div>
  </div>
  )
}

export default Sidebar
