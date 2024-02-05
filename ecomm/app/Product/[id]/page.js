'use client'
import React from 'react'
import { client } from '@/lib/client'
import { useEffect,useState } from 'react'
import StaticProduct from '@/components/StaticProduct'
import Head from 'next/head'
const page = ({params}) => {
  const [product, setproduct] = useState([]);
  const getData=async()=>{
    const qurye=`*[_type == 'Product']`
    const Productdata= await client.fetch(qurye)
    const product=await Productdata
    setproduct(product)
  }
  const title = product?.filter((curentElem)=>curentElem._id===params.id).map((elem)=>elem.title)
  useEffect(()=>{
    document.title=title
    getData()
  })
 
  return (
    <div className='w-full h-[100vh] pt-[10rem]'>
     
      {product?.filter((curentElem)=>curentElem._id===params.id).map((elem)=>{
       return <>
        
       <StaticProduct key={elem._id} data={elem}/></>
      })}
    </div>
  )
}

export default page
