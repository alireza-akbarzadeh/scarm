import styled, { css } from "styled-components";
import { Input } from "../../components";

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

const DefaultHeaderBG = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  padding: 13px 30px;
  justify-content: space-between;
  align-items: center;
`;

const IconHover = styled.div`
  cursor: pointer;
  padding: 3px 5px;
  svg {
    color: #faf8f9;
    font-weight: 400;
    font-size: 24px;
  }
  &:hover {
    padding: 3px 5px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const SearchInput = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 3px;
  position: relative;

  &:hover {
    color: #333;
    background-color: rgba(255, 255, 255, 0.99);
  }
  &:focus svg {
    color: #333;
    background-color: rgba(255, 255, 255, 0.99);
  }
  &:focus {
    width: 400px;
  }
  transition: width 0.3s ease-in-out;
  input {
    width: 100%;
    border-radius: 3px;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 7px 37px;
    &::placeholder {
      color: #faf8f9;
      font-weight: 400;
    }
    &:focus {
      color: #333;
      width: 400px;
      background-color: rgba(255, 255, 255, 0.99);
    }
    &:hover::placeholder {
      color: #333;
    }

    &:focus + .search {
      color: #333;
    }
    &:hover + .search {
      color: #333;
    }
  }
  svg {
    left: 20px;
    font-size: 22px;
    color: #fff;
  }
  .search {
    position: absolute;
    left: 10px;
  }
`;

export { HeaderBg, Brand, DefaultHeaderBG, IconHover, SearchInput };
