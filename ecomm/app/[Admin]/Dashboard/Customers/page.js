"use client"
import RightLayout from '@/components/Dashboard/RightLayout'
import Sidebar from '@/components/Dashboard/Sidebar'
import React, { Suspense } from 'react'
import Order from '@/components/Dashboard/Order';
import User from '@/components/Dashboard/User';
import Loading from '@/components/Loading';
import MainLayout from '@/components/Dashboard/MainLayout';

const Customers = (props) => {
  return (
    <Suspense fallback={<Loading/>}>

<MainLayout>
<style>{`.Navbar {display: none;}`}</style>
<Sidebar Admin={props.params.Admin}/>
<RightLayout>
    <User/>
</RightLayout>
</MainLayout>
</Suspense>
  )
}

export default Customers;
