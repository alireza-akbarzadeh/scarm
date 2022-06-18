import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Row = ({
  children,
  direction = "row",
  space = "10px",
  justify,
  alignItems,
  className,
  flexWrap,
  style,
  ...rest
}) => {
  return (
    <Flex
      justify={justify}
      style={style}
      flexWrap={flexWrap}
      className={className}
      space={space}
      alignItems={alignItems}
      direction={direction}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default Row;

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ space }) => space};
`;

Row.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  space: PropTypes.string,
  justify: PropTypes.string,
  flexWrap: PropTypes.string,
  alignItems: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.string,
};
