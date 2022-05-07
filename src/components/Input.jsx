import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Input = ({
  style,
  inputStyle,
  className,
  inputClassName,
  type,
  ...rest
}) => {
  return (
    <FormControl style={style} className={className}>
      <BaseInput
        style={inputStyle}
        className={inputClassName}
        type={type}
        {...rest}
      />
    </FormControl>
  );
};

export default Input;

const FormControl = styled.div`
  margin: 5px 0;
  width: 100%;
`;

const BaseInput = styled.input`
  width: 100%;
  padding: 5px 15px;
  outline: none;
  border-radius: 10px;
  height: 50px;
  background-color: ${({ theme }) => theme.blue_800};
  color: #faf8f9;
  font-size: 16px;
  border: none;
  font-weight: 600;
  transition: all 0.3 ease-in-out;

  &:focus {
    box-shadow: 0px -1px 5px 1px #1a429c;
    border: 1px solid ${({ theme }) => theme.secondary};
    transition: all 1 ease-in-out;
    background-color: #323644;
  }
`;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  style: PropTypes.string,
  inputStyle: PropTypes.string,
};
