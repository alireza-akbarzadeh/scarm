import styled from "styled-components";
import PropTypes from "prop-types";
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
  max-width: ${({ maxWidth, theme }) =>
    maxWidth === "2xl"
      ? theme.breakpoints.xll
      : maxWidth === "xl"
      ? theme.breakpoints.xl
      : maxWidth === "lg"
      ? theme.breakpoints.lg
      : maxWidth === "md"
      ? theme.breakpoints.md
      : maxWidth === "sm"
      ? theme.breakpoints.sm
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
