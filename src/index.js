import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProvider from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import queryClient from "./queryClient";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  </React.StrictMode>
);
