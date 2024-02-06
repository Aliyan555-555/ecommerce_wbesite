"use client"
import RightLayout from '@/components/Dashboard/RightLayout'
import Sidebar from '@/components/Dashboard/Sidebar'
import React, { Suspense } from 'react'
import Order from '@/components/Dashboard/Order';
import User from '@/components/Dashboard/User';
import Loading from '@/components/Loading';

const Customers = (props) => {
  return (
    <Suspense fallback={<Loading/>}>

<div className={` box-border  relative antialiased flex w-full h-screen bg-body p-6 gap-6 rounded-lg overflow-hidden`}>
<style>{`.Navbar {display: none;}`}</style>
<Sidebar Admin={props.params.Admin}/>
<RightLayout>
    <User/>
</RightLayout>
</div>
</Suspense>
  )
}

export default Customers;
