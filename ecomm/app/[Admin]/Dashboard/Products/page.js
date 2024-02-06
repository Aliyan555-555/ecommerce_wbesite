"use client"
import RightLayout from '@/components/Dashboard/RightLayout'
import Sidebar from '@/components/Dashboard/Sidebar'
import Product from "@/components/Dashboard/Product";
import React, { Suspense } from 'react'
import Loading from '@/components/Loading';
import MainLayout from '@/components/Dashboard/MainLayout';

const Products = (props) => {
  return (
    <Suspense fallback={<Loading/>}>

<MainLayout>
<style>{`.Navbar {display: none;}`}</style>
<Sidebar Admin={props.params.Admin}/>
<RightLayout>
    <Product/>
</RightLayout>
</MainLayout>
</Suspense>
  )
}

export default Products;
