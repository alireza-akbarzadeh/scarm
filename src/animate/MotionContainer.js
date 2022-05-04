import PropTypes from 'prop-types';
import {motion} from 'framer-motion';
// material
//
import {varWrapEnter} from './variants';

// ----------------------------------------------------------------------

MotionContainer.propTypes = {
    open: PropTypes.bool.isRequired,
    children: PropTypes.node
};

export default function MotionContainer({open, children, ...other}) {
    return (
        <motion.div
            initial={false}
            animate={open ? 'animate' : 'exit'}
            variants={varWrapEnter}
            {...other}
        >
            {children}
        </motion.div>
    );
}
