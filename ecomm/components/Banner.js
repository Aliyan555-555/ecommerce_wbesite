import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {Suspense } from 'react'
import Loading from './Loading'
import MainButton from './UI/MainButton'
const Banner = ({BannerData,main}) => {

 return (
  
  <Suspense  fallback={<Loading/>}>
    <div className={`w-full max-[480px]:h-[90vh] max-[550px]:px-4 ${main?'text-Dashboard':'text-body'} ${main?'h-[60rem]':'h-[50rem]'} ${main?'bg-hover':'bg-Dashboard-border'} sm:px-8 md:p-[4rem] mt-[9rem] ${main?'md:mt-[10rem]':""}  sm:rounded-2xl relative md:my-0 md:mx-auto md:w-[90%] flex items-center justify-center flex-col`}>
      <Image   alt='Shose' src={main?'/Shose.png':'/Images/banner3.png'} width={'500'} height={'600'}  className='absolute object-center z-[10] sm:top-[-15px] max-[320px]:bottom-0 max-[600px]:right-[-50px] max-[600px]:bottom-[-80px]  '/>
      <div className='flex flex-col w-full h-[100%]  items-start justify-center '>
      <h2 className='text-2xl font-bold' >{BannerData[0]?.SmallText}</h2>
      <h1 className='text-5xl sm:text-6xl md:text-7xl font-black'>{BannerData[0]?.MediumHeading}</h1>
      <h1 className='text-[10rem] leading-[10rem] sm:text-[12rem] sm:leading-[12.5rem] md:leading-[14r.5em] md:text-[14rem] text-body font-black  '>{BannerData[0]?.LargeHeading}</h1>
      <MainButton main={main} href={'/'} ButtonText={BannerData[0]?.ButtonText}/>
      </div>
      <div className='w-full flex flex-col items-end justify-center '>
        <h4 className='text-2xl font-semibold '>Discription</h4>
        <p className='text-ellipsis w-[40%]  self-end text-right'>{BannerData[0]?.ProductDetail}</p>
      </div>
    </div></Suspense>
  )
}

export default Banner
