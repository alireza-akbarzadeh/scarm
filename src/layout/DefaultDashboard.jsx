import React from "react";
import { Outlet } from "react-router-dom";
import { DefaultHeader } from "./Header";
const DefaultDashboard = () => {
  return (
    <>
      <DefaultHeader />
      <Outlet />
    </>
  );
};

export default DefaultDashboard;
