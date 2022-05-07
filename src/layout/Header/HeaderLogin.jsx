import React from "react";
import Img from "../../constant/images";
import { Images, Menu } from "../../components";
import Path from "../../constant/Path";
import { Brand } from "./Header.Styled.js";
const menuData = [
  {
    title: (
      <Brand>
        <Images
          src={Img.Logo}
          alt="Logo"
          objectFit="contain"
          height="60px"
          width="40px"
        />
        <h1>Scram</h1>
      </Brand>
    ),
    href: Path.Home,
  },
  { title: "Home", href: Path.Home },
  { title: "Join", href: Path.Home },
];
const HeaderLogin = () => {
  return <Menu space="90px" data={menuData} />;
};

export default HeaderLogin;
