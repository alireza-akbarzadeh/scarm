import React, { useContext } from "react";
import { Tooltip } from "../../components";
import { DefaultHeaderBG, IconHover, SearchInput } from "./Header.Styled";
import { FiMenu, FiHome, FiHelpCircle } from "react-icons/fi";
import { RiSearchLine } from "react-icons/ri";
import { BsPlus, BsCircleHalf, BsSun } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiMoonFill } from "react-icons/ri";
import { ThemePreferenceContext } from "../../context/ThemeContext";
import { Row } from "../../components";
import { useMangeContext } from "../../context/ContextProvider";
const DefaultHeader = () => {
  const { toggleTheme } = useContext(ThemePreferenceContext);
  const { state, dispatch } = useMangeContext();
  return (
    <DefaultHeaderBG>
      <Row direction="row" space="13px" alignItems={"center"}>
        <IconHover onClick={() => dispatch({ type: "isSidebar" })}>
          <FiMenu />
        </IconHover>
        <IconHover>
          <FiHome />
        </IconHover>
        <form action="">
          <SearchInput>
            <input type="text" placeholder="Search ...." />
            <RiSearchLine className="search" />
          </SearchInput>
        </form>
      </Row>
      <Row direction="row" space="13px" alignItems={"center"}>
        <IconHover>
          <BsPlus />
        </IconHover>
        <IconHover>
          <BsCircleHalf />
        </IconHover>
        <IconHover>
          <FiHelpCircle />
        </IconHover>
        <IconHover>
          <MdOutlineNotificationsNone />
        </IconHover>
        <IconHover onClick={() => toggleTheme()}>
          {localStorage.getItem("theme") === "light" ? (
            <BsSun />
          ) : (
            <RiMoonFill />
          )}
        </IconHover>
        <IconHover>
          <CgProfile />
        </IconHover>
      </Row>
    </DefaultHeaderBG>
  );
};

export default DefaultHeader;
