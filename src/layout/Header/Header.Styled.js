import styled from "styled-components";

const HeaderBg = styled.div`
  background: linear-gradient(
      90deg,
      rgba(11, 12, 17, 0.99) 55%,
      rgba(11, 12, 17, 0.7) 100%
    ),
    url("./assets/nature.jpg") no-repeat center center;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(10px);
`;

const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  h1 {
    font-size: 16px;
    margin-top: 6px;
    color: whitesmoke;
  }
`;

export { HeaderBg, Brand };
