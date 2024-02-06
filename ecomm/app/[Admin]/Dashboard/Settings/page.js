"use client";
import RightLayout from "@/components/Dashboard/RightLayout";
import Sidebar from "@/components/Dashboard/Sidebar";
import React, { Suspense, useEffect } from "react";
import Setting from "@/components/Dashboard/Setting";
import Loading from "@/components/Loading";
import MainLayout from "@/components/Dashboard/MainLayout";

const Settings = (props) => {
  useEffect(() => {
    document.title = "Settings";
},[])
  return (

    <Suspense fallback={<Loading />}>
      <MainLayout>
        <style>{`.Navbar {display: none;}`}</style>
        <Sidebar Admin={props.params.Admin} />
        <RightLayout>
          <Setting />
        </RightLayout>
      </MainLayout>
    </Suspense>
  );
};

export default Settings;
