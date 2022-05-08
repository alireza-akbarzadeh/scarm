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
  letterSpacing,
  className,
  styles,
  ...rest
}) => {
  const Tag = as;
  const Element = styled(Tag)`
    color: ${({ color, theme }) => (color ? color : theme.text)};
    font-size: ${({ fontSize }) => fontSize};
    line-height: ${({ lineHeight }) => lineHeight};
    font-style: ${({ fontStyle }) => fontStyle};
    font-weight: ${({ fontWeight }) => fontWeight};
    font-family: ${({ fontFamily }) => fontFamily};
    text-transform: ${({ textTransform }) => textTransform};
    text-decoration: ${({ textDecoration }) => textDecoration};
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
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
