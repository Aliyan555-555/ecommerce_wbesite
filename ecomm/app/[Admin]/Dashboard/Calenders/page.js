"use client";
import RightLayout from "@/components/Dashboard/RightLayout";
import Sidebar from "@/components/Dashboard/Sidebar";
import React, { Suspense, useEffect } from "react";
import Calender from "@/components/Dashboard/Calender";
import Loading from "@/components/Loading";
import MainLayout from "@/components/Dashboard/MainLayout";

const Calenders = (props) => {
  useEffect(() => {
    document.title = "Calender";
},[])
  return (
    <Suspense fallback={<Loading />}>
    <MainLayout>
        <style>{`.Navbar {display: none;}`}</style>
        <Sidebar Admin={props.params.Admin} />
        <RightLayout>
          <Calender />
        </RightLayout>
     </MainLayout>
    </Suspense>
  );
};

export default Calenders;
