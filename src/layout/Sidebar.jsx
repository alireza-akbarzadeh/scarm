import React, { useState } from "react";
import styled from "styled-components";
import { Menu } from "../components";
import { motion } from "framer-motion";
import { Nav } from "../data";
import { HiMenuAlt2 } from "react-icons/hi";
import { useMangeContext } from "../context/ContextProvider";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { isSidebar } = useMangeContext();
  return (
    <SidebarBG
      collapsed={collapsed}
      transition={{ duration: 0.5 }}
      animate={{
        width: collapsed ? 60 : 300,
        transform: `scaleX(${isSidebar ? 0 : 1})`,
        padding: collapsed ? "18px 25px" : "10px 16px",
      }}
    >
      <Icon onClick={() => setCollapsed((prev) => !prev)}>
        <HiMenuAlt2 />
      </Icon>
      <Menu
        style={{ flex: "1 1 auto" }}
        space="46px"
        collapsedMenu={collapsed}
        styleItem={{ whiteSpace: "nowrap" }}
        direction="column"
        justify="flex-start"
        data={Nav.SideMenu}
      />
      <Avatar>
        <img
          src="https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg"
          alt="Alireza"
        />
      </Avatar>
    </SidebarBG>
  );
};

export default Sidebar;

const SidebarBG = styled(motion.div)`
  background-color: ${({ theme }) => theme.sidebar};
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: ${({ collapsed }) => (collapsed ? "center" : "flex-start")};
  flex-direction: column;
`;

const Icon = styled.div`
  flex: 1 1 1;
  cursor: pointer;
  margin-bottom: 60px;
`;

const Avatar = styled.div`
  flex: 1 1 1;
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }
`;
