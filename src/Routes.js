import React from "react";
// React Routes Dom
import { useRoutes, Navigate } from "react-router-dom";
// Layout
import { DashboardLayout, LoginLayout } from "./layout";
// Pages
import { Login, NotFound, Register, Todos } from "./pages";

const Router = () => {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [{ path: "todos", element: <Todos /> }],
    },
    {
      path: "/",
      element: <LoginLayout />,
      children: [
        { path: "/", element: <Navigate to="/login" /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
};
export default Router;
