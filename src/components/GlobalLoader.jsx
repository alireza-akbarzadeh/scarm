import React from "react";
import { useIsFetching } from "react-query";

const GlobalLoader = () => {
  const isFetching = useIsFetching();
  console.log(isFetching, "isFetching");
  return (
    <div
      style={{
        display: isFetching ? "block" : "none",
        width: "50px ",
        height: "50px",
        backgroundColor: "#f50",
        borderRadius: "50%",
      }}
    />
  );
};

export default GlobalLoader;
