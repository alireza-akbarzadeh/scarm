import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderLogin } from "./Header";
import styled from "styled-components";
const LoginLayout = () => {
  return (
    <Background>
      <Box>
        <HeaderLogin />
        <Outlet />
      </Box>
    </Background>
  );
};

export default LoginLayout;

const Background = styled.div`
  background: linear-gradient(
      90deg,
      rgba(11, 12, 17, 0.99) 100%,
      rgba(11, 12, 17, 0.7) 100%
    ),
    url("./assets/nature.jpg") no-repeat center center;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(10px);
`;

const Box = styled.div`
  padding: 25px 0 0 70px;
`;
