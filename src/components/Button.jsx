import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Button = ({
  txt,
  color,
  className,
  style,
  variant = "contained",
  fullWidth,
  disabled,
  startIcon,
  endIcon,
  rounded,
  width,
  href,
  size = "small",
  loading,
  ...rest
}) => {
  const Tag = href ? "a" : "button";
  const sameStyle = css`
    cursor: pointer;
    outline: none;
  `;

  const type = eval(color);

  const BTN = styled(Tag)`
    background-color: ${({ color, theme }) => (color ? color : theme.info)};
    border-radius: ${({ rounded }) => rounded && rounded};
    background-position: center;
    transition: background 0.8s;
    ${({ variant }) =>
      variant === "text"
        ? css`
            border: none;
            background-color: transparent;
            color: ${({ theme }) => theme.text};
            ${sameStyle}
          `
        : variant === "contained"
        ? css`
            ${sameStyle}
          `
        : variant === "outlined"
        ? css`
            border: 1px solid ${({ theme }) => theme.btnColor};
            ${sameStyle};
          `
        : null}

    ${({ fullWidth }) =>
      fullWidth
        ? css`
            width: 100%;
          `
        : css`
            width: ${({ width }) => width && width};
          `};

    padding: ${({ size }) =>
      size === "small"
        ? "10px"
        : size === "medium"
        ? "13px"
        : size === "large"
        ? "17px"
        : size};

    &:hover {
      background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%)
        center/15000%;
    }
    &:active {
      background-color: #6eb9f7;
      background-size: 100%;
      transition: background 0s;
    }
  `;

  return (
    <BTN
      style={style}
      disabled={disabled}
      color={color}
      size={size}
      fullWidth={fullWidth}
      width={width}
      rounded={rounded}
      className={className}
      variant={variant}
      {...rest}
    >
      {startIcon && startIcon}
      {txt}
      {endIcon && endIcon}
      {loading && "...."}
    </BTN>
  );
};

export default Button;

Button.propTypes = {
  txt: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  color: PropTypes.string,
  rounded: PropTypes.string,
  startIcon: PropTypes.any,
  endIcon: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.string,
};
