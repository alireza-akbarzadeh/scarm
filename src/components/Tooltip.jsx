import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
const Tooltip = ({
  children,
  styles,
  className,
  position = "down",
  content,
}) => {
  return (
    <TooltipContainer
      position={position}
      content={content}
      className={className}
      style={styles}
    >
      <div className={"Tooltip_Child"} />
      {children}
    </TooltipContainer>
  );
};

export default Tooltip;

const TooltipContainer = styled.div`
  position: relative;
  &:hover .Tooltip_Child {
    display: inline-flex;
  }
  .Tooltip_Child {
    position: absolute;
    display: none;
    background: #333;
    padding: 5px 4px;
    text-align: center;
    color: #faf8f9;
    font-size: 15px;
    ${({ position }) =>
      position === "down"
        ? css`
            bottom: 0;
            transform: translate(-10px, 40px);
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
  .Tooltip_Child::after {
    content: ${({ content }) => JSON.stringify(content)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
  .Tooltip_Child::before {
    content: "";
    border: 0 5px 0 5px 0;
    position: absolute;

    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #333;
    transform: translate(-50%, 0px);
    ${({ position }) =>
      position === "down"
        ? css`
            left: 50%;
            top: -6px;
          `
        : position === "right"
        ? css`
            left: -3px;
            top: 50%;
            transform: translate(-50%, -50%) rotate(270deg);
          `
        : position === "left"
        ? css`
            right: -25px;
            top: 50%;
            transform: translate(-50%, -50%) rotate(-270deg);
          `
        : position === "top"
        ? css`
            left: 50%;
            bottom: -6px;
            transform: translate(-50%, 0px) rotate(180deg);
          `
        : null}
  }
`;

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.string,
  position: PropTypes.string,
};
