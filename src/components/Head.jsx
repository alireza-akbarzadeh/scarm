import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";

const Head = forwardRef(({ children, title = "", ...other }, ref) => {
    return (
        <div ref={ref} {...other}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
});

Head.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default Head;
