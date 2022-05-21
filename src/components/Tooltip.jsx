import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
const Tooltip = ({ children, styles, className, position = "down", label }) => {
  return (
    <TooltipContainer position={position} className={className} style={styles}>
      <div className={"Tooltip_Child"}>{label}</div>
      {children}
    </TooltipContainer>
  );
};

export default Tooltip;

const TooltipContainer = styled.div`
  position: relative;
  &:hover .Tooltip_Child {
    visibility: visible;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }
  .Tooltip_Child {
    position: absolute;
    opacity: 0;
    max-width: 100%;
    background: #333;
    padding: 5px 4px;
    text-align: center;
    color: #faf8f9;
    font-size: 15px;
    ${({ position }) =>
      position === "down"
        ? css`
            bottom: 0;
            transform: translate(-10px, 50px);
          `
        : position === "right"
        ? css`
            right: 5px;
          `
        : position === "left"
        ? css`
            left: 5px;
          `
        : position === "top"
        ? css`
            top: 0;
          `
        : null}
  }
`;

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.string,
  position: PropTypes.string,
};
