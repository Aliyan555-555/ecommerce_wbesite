'use client'
import React, { Suspense } from 'react'
import { useEffect,useState } from 'react'
import StaticProduct from '@/components/StaticProduct'
import { GlobleContext } from '@/Context/StateContext'
import Loading from '@/components/Loading'
function Product ({params}){
  const {Products} = GlobleContext() 
  const title = Products?.filter((curentElem)=>curentElem._id===params.id).map((elem)=>elem.title)
  console.log(title)
  useEffect(()=>{
    document.title=title
  })
 
  return (
    <Suspense fallback={<Loading/>}>
      <div className='w-full h-[100vh] pt-[10rem]'>
      {Products.filter((curentElem)=>curentElem._id===params.id).map((elem)=>{
       return <StaticProduct key={elem._id} data={elem}/>
      })}
    </div>
    </Suspense>
  )
}

export default Product
