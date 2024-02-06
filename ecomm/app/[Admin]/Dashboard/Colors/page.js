"use client"
import RightLayout from '@/components/Dashboard/RightLayout'
import Sidebar from '@/components/Dashboard/Sidebar'
import React, { Suspense } from 'react'
import Color from '@/components/Dashboard/Colors';
import Loading from '@/components/Loading';
import MainLayout from '@/components/Dashboard/MainLayout';

const Colors = (props) => {
  useEffect(() => {
    document.title = "Colo";
},[])
  return (
    <Suspense fallback={<Loading/>}>

<MainLayout>
<style>{`.Navbar {display: none;}`}</style>
<Sidebar Admin={props.params.Admin}/>
<RightLayout>
  <Color/>
</RightLayout>
</MainLayout>
</Suspense>
  )
}

export default Colors;
