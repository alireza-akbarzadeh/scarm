import React from "react";
import { Outlet } from "react-router-dom";
import { useMangeContext } from "../context/ContextProvider";
import { DefaultHeader } from "./Header";
import Sidebar from "./Sidebar";
const DefaultDashboard = () => {
  const { state } = useMangeContext();

  return (
    <>
      <DefaultHeader />
      {state.isSidebar && <Sidebar />}
      <Outlet />
    </>
  );
};

export default DefaultDashboard;
