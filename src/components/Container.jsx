import styled from "styled-components";
import PropTypes from "prop-types";
import { base } from "../constant/theme";
import { css } from "styled-components";
const Container = ({ maxWidth = "xl", children, center = true, ...rest }) => {
  return (
    <Box center={center} maxWidth={maxWidth} {...rest}>
      {children}
    </Box>
  );
};

export default Container;

const Box = styled.div`
  max-width: ${({ maxWidth }) =>
    maxWidth === "2xl"
      ? base.breakpoints.xll
      : maxWidth === "xl"
      ? base.breakpoints.xl
      : maxWidth === "lg"
      ? base.breakpoints.lg
      : maxWidth === "md"
      ? base.breakpoints.md
      : maxWidth === "sm"
      ? base.breakpoints.sm
      : "1280px"};
  padding-left: 15px;
  padding-right: 15px;
  ${({ center }) =>
    center &&
    css`
      margin: 0 auto;
    `}
`;
Container.propTypes = {
  maxWidth: PropTypes.string,
  children: PropTypes.node.isRequired,
};
