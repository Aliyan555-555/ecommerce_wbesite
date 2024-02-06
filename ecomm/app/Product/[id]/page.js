'use client'
import React from 'react'
import { client } from '@/lib/client'
import { useEffect,useState } from 'react'
import StaticProduct from '@/components/StaticProduct'
import Head from 'next/head'
import { GlobleContext } from '@/Context/StateContext'
function Product ({params}){
  const {Products} = GlobleContext() 
  const title = Products?.filter((curentElem)=>curentElem._id===params.id).map((elem)=>elem.title)
  useEffect(()=>{
    document.title=title
  })
 
  return (
    <div className='w-full h-[100vh] pt-[10rem]'>
     
      {Products?.filter((curentElem)=>curentElem._id===params.id).map((elem)=>{
       return <>
        
       <StaticProduct key={elem._id} data={elem}/></>
      })}
    </div>
  )
}

export default Product
