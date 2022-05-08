import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
const Input = ({
  style,
  inputStyle,
  className,
  dir = "ltr",
  icon,
  inputClassName,
  type,
  label,
  ...rest
}) => {
  return (
    <FormControl dir={dir} style={style} className={className}>
      <BaseInput
        style={inputStyle}
        className={inputClassName}
        type={type}
        {...rest}
      />
      <label className={"label_Handler"}>{label}</label>
      <span className={"Icon_Handler"}>{icon && icon}</span>
    </FormControl>
  );
};

export default Input;

const FormControl = styled.div`
  margin: 5px 0;
  position: relative;
  width: 100%;
  .label_Handler {
    color: #595b63;
    font-size: 13px;
    position: absolute;
    width: 100%;
    text-transform: capitalize;
    z-index: 4;
    ${({ dir }) =>
      dir === "ltr"
        ? css`
            right: 0;
            transform: translate(14px, -10px);
            top: 50%;
          `
        : css`
            left: 0;
            top: 50%;
            transform: translateX(14px, -10px);
          `};
  }
  .Icon_Handler {
    position: absolute;
    ${({ dir }) =>
      dir === "ltr"
        ? css`
            right: 0;
            transform: translate(-14px, -10px);
            top: 50%;
          `
        : css`
            left: 0;
            top: 50%;
            transform: translateX(14px, -10px);
          `}
  }
`;

const BaseInput = styled.input`
  width: 100%;
  padding: 5px 15px;
  outline: none;
  height: 50px;
  color: #faf8f9;
  border-radius: 10px;
  padding: 0 15px;
  background-color: transparent;
  font-size: 16px;
  border: none;
  background-color: ${({ theme }) => theme.blue_800};
  font-weight: 600;
  transition: all 0.3 ease-in-out;
  &:focus {
    box-shadow: 0px -1px 5px 1px #1a429c;
    border: 1px solid ${({ theme }) => theme.secondary};
    background-color: #323644;
  }

  &:focus + .label_Handler {
    font-size: 13px;
    transition: all 0.5s ease-in-out;
    padding: 2px 5px;
    transform: translate(10px, -30px) !important;
    background: #323644;
    color: ${({ theme }) => theme.text};
  }
`;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  dir: PropTypes.string,
  icon: PropTypes.any,
  style: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  inputStyle: PropTypes.string,
  inputClassName: PropTypes.string,
};
