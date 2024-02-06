import React from "react";

const MainLayout = ({ children }) => {
  return (
  <div className={` box-border  relative antialiased flex w-full h-screen bg-body p-6 gap-6 rounded-lg  overflow-hidden`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
