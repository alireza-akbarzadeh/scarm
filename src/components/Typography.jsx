import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const Typography = ({
  as = "div",
  children,
  color,
  fontSize = "15px",
  lineHeight,
  fontStyle,
  fontWeight,
  fontFamily,
  textTransform,
  textDecoration,
  className,
  styles,
  ...rest
}) => {
  const Tag = as;
  const Element = styled(Tag)`
    color: ${({ color, theme }) => (color ? color : theme.text)};
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
    font-style: ${({ lineHeight }) => lineHeight};
    font-weight: ${({ lineHeight }) => lineHeight};
    font-family: ${({ lineHeight }) => lineHeight};
    text-transform: ${({ lineHeight }) => lineHeight};
    text-decoration: ${({ lineHeight }) => lineHeight};
  `;
  return (
    <Element
      fontStyle={fontStyle}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      textTransform={textTransform}
      textDecoration={textDecoration}
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={color}
      className={className}
      style={styles}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Typography;

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  fontStyle: PropTypes.string,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  textTransform: PropTypes.string,
  textDecoration: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.string,
};
