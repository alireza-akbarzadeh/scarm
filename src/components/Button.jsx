import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
const Button = ({
  txt,
  txtColor,
  color,
  className,
  style,
  variant = "contained",
  fullWidth,
  fontSize = "18px",
  disabled,
  startIcon,
  endIcon,
  rounded,
  width,
  iconSize,
  effect = true,
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

  const SameBG = css`
    ${({ color, theme }) =>
      color === "success"
        ? theme.success
        : color === "info"
        ? theme.info
        : color === "error"
        ? theme.error
        : color === "warning"
        ? theme.warning
        : color === "secondary"
        ? theme.secondary
        : color === "primary"
        ? theme.primary
        : color}
  `;

  const BTN = styled(Tag)`
    background-color: ${SameBG};
    display: flex;
    gap: 13px;
    align-items: center;
    justify-content: center;
    border-radius: ${({ rounded }) => rounded && rounded};
    background-position: center;
    transition: background 0.8s;
    color: ${({ txtColor, theme }) => (txtColor ? txtColor : theme.text)};
    font-size: ${({ fontSize }) => fontSize};

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

    ${({ effect }) =>
      effect &&
      css`
        &:hover {
          background: ${({ theme }) => theme.hover}
            radial-gradient(circle, transparent 1%, ${SameBG} 1%) center/15000%;
        }
        &:active {
          background-color: ${SameBG};
          background-size: 100%;
          transition: background 0s;
        }
      `}

    & span,svg {
      padding-top: "-10px";
      font-size: ${({ iconSize }) => `${iconSize}px`};
    }
  `;

  return (
    <BTN
      style={style}
      disabled={disabled}
      effect={effect}
      color={color}
      iconSize={iconSize}
      txtColor={txtColor}
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
  fontSize: PropTypes.string,
  iconSize: PropTypes.string,
  fullWidth: PropTypes.bool,
  effect: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  color: PropTypes.string,
  txtColor: PropTypes.string,
  rounded: PropTypes.string,
  startIcon: PropTypes.any,
  endIcon: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.string,
};
