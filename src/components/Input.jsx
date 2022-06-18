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
  label,
  customTextError,
  isError = false,
  ...register
}) => {
  return (
    <FormControl dir={dir} style={style} className={className}>
      <BaseInput
        {...register}
        isError={isError}
        label={label}
        style={inputStyle}
        className={inputClassName}
      />
      <label className={"label_Handler"} />
      <span className={"Icon_Handler"}>{icon && icon}</span>
      {isError && (
        <Error>{customTextError ? customTextError : "Field Is Required"}</Error>
      )}
    </FormControl>
  );
};

export default Input;

const FormControl = styled.div`
  margin: 5px 0;
  padding: 5px 15px;
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
            right: -10px;
            transform: translate(14px, -10px);
            top: 50%;
          `
        : css`
            left: -10px;
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

const Error = styled.div`
  color: ${({ theme }) => theme.error};
  font-size: 16px;
  @media (max-width: 600px) {
    font-size: 13px;
  }

  display: block;
  margin-top: 10px;
  position: absolute;
`;
const BaseInput = styled.input`
  width: 100%;
  padding: 5px 15px;
  outline: none;
  height: 50px;
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  padding: 0 15px;
  background-color: transparent;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.body};
  font-weight: 600;
  transition: all 0.3 ease-in-out;
  &:focus {
    box-shadow: 0px 0px 0px 2px #1a429c;
    border: 1px solid ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.body};
  }

  &:focus + .label_Handler {
    font-size: 13px;
    transition: all 0.35s ease-in-out;
    padding: 2px 5px;
    transform: translate(10px, -37px) !important;
  }
  &:focus + .label_Handler::before {
    content: ${(props) => JSON.stringify(props.label)};
    display: block;
    background: ${({ theme }) => theme.body};
    text-align: center;
    padding: 2px 3px;
    position: absolute;
    z-index: -1;
    color: ${({ theme }) => theme.text};
  }

  & + .label_Handler::before {
    content: ${({ label }) => JSON.stringify(label)};
    display: block;
  }

  ${({ isError }) =>
    isError &&
    css`
      border: 1.5px solid ${({ theme }) => theme.error} !important;
      box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.error} !important;
    `}
`;

Input.propTypes = {
  dir: PropTypes.string,
  icon: PropTypes.any,
  isError: PropTypes.bool,
  style: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  inputStyle: PropTypes.string,
  customTextError: PropTypes.string,
  inputClassName: PropTypes.string,
};
