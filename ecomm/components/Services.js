import React, { useEffect, useState } from 'react'
import { ServicesData } from '@/Constants/index'
const Services = () => {
const [isWindowNarrow,setisWindowNarrow] =useState()

useEffect(()=>{
  if(typeof window !== 'undefined'){
    setisWindowNarrow(window.innerWidth < 500)
  }
},[])
  return (
    <div className='w-full  flex items-center justify-center py-8 max-[639px]:gap-4 flex-wrap'>
      {
        ServicesData.map((item,i)=>{
          
            return(
                <div key={item.title} style={{
                  textAlign:isWindowNarrow ? (i===1 || i===3 ? 'right' : 'left') : 'left',
                  flexDirection:isWindowNarrow ? (i===1 || i===3  ? 'row-reverse' : 'row') : 'row'}} className='max-[639px]:w-[80%] sm:w-[50%] flex-row-reverse  lg:w-1/4 h-full flex 
                justify-between'>
                    <div className='md:w-[100px] w-[80px] bg-hover text-6xl text-Dashboard  rounded-full flex 
                    items-center md:h-[100px] h-[80px] justify-center' >
                        <item.icon className=''/>    
                    </div>
                    <div className='flex flex-col w-[67%] justify-center pl-3'>
                        <h4 className='sm:text-3xl text-2xl font-bold w-full text-Dashboard'>{item.title}</h4>
                        <p className='text-xl text-Dashboard w-full font-normal'>{item.decription}</p>

                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Services
