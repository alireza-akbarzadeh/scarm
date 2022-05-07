import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Images = ({
  src,
  alt,
  ImgStyle,
  ImgClassName,
  objectFit = "cover",
  className,
  style,
  width = "400px",
  height = "400px",
  ...rest
}) => {
  return (
    <ImgControl
      width={width}
      height={height}
      className={className}
      style={style}
      {...rest}
    >
      <Img
        objectFit={objectFit}
        className={ImgClassName}
        style={ImgStyle}
        alt={alt}
        src={src}
      />
    </ImgControl>
  );
};

export default Images;

const ImgControl = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};
`;

Images.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  objectFit: PropTypes.string,
  className: PropTypes.string,
  ImgClassName: PropTypes.string,
  style: PropTypes.object,
  ImgStyle: PropTypes.object,
};
