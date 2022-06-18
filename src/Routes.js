import React from "react";
// React Routes Dom
import { useRoutes, Navigate } from "react-router-dom";
// Layout
import { DashboardLayout, LoginLayout, DefaultDashboard } from "./layout";
// Pages
import {
  Home,
  Login,
  NotFound,
  Register,
  Todos,
  Books,
  SingleBook,
  NewBooks,
} from "./pages";

const Router = () => {
  return useRoutes([
    {
      path: "/auth",
      element: <LoginLayout />,
      children: [
        { path: "/auth", element: <Navigate to='/auth/login' /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [{ path: "todos", element: <Todos /> }],
    },

    {
      path: "/",
      element: <DefaultDashboard />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/books", element: <Books /> },
        { path: "/new-books", element: <NewBooks /> },
        { path: "/books/:id", element: <SingleBook /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to='/404' /> },
      ],
    },

    { path: "*", element: <Navigate to='/404' replace /> },
  ]);
};
export default Router;
