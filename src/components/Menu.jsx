import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = ({
  data = [],
  style,
  styleItem,
  className,
  collapsedMenu,
  ItemClassName,
  space = "10px",
  direction = "row",
  alignItems = "flex-start",
  justify = "flex-start",
  icon,
  ...rest
}) => {
  return (
    <MenuContainer
      justify={justify}
      alignItems={alignItems}
      space={space}
      direction={direction}
      className={className}
      style={style}
    >
      {data.map((item, index) => (
        <MenuItem key={index} className={ItemClassName} style={styleItem}>
          {item.icon && item.icon}
          {!collapsedMenu && (
            <Link to={item.href} {...rest}>
              {item.title}
            </Link>
          )}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;

Menu.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
  ItemClassName: PropTypes.string,
  alignItems: PropTypes.string,
  justify: PropTypes.string,
  style: PropTypes.object,
  styleItem: PropTypes.object,
  icon: PropTypes.any,
  collapsedMenu: PropTypes.bool,
};

const MenuContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ space }) => space};
  align-items: flex-start;
  justify-content: ${({ justify }) => justify};
  list-style-type: ${({ alignItems }) => alignItems};
`;
const MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    font-size: 20px;
    color: #9ca8ba;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.gray_600};
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    margin-left: 15px;
  }
`;
