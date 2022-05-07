import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = ({
  data = [],
  style,
  styleItem,
  className,
  ItemClassName,
  space = "10px",
  direction = "row",
  ...rest
}) => {
  return (
    <MenuContainer
      space={space}
      direction={direction}
      className={className}
      style={style}
    >
      {data.map((item, index) => (
        <MenuItem key={index} className={ItemClassName} style={styleItem}>
          <Link to={item.href} {...rest}>
            {item.title}
          </Link>
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
  style: PropTypes.object,
  styleItem: PropTypes.object,
};

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ space }) => space};
  align-items: center;
  list-style-type: none;
`;
const MenuItem = styled.li`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.gray_600};
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
  }
`;
