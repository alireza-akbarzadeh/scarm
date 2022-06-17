import React from "react";

const useEventListener = (type, handler, el = window) => {
  const savedHandler = React.useRef();

  React.useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const listener = (e) => savedHandler.current(e);

    el.addEventListener(type, listener);

    return () => {
      el.removeEventListener(type, listener);
    };
  }, [type, el]);
};

export default useEventListener;

// usage

// const [coords, setCoords] = React.useState({ x: 0, y: 0 });

// const updateCoords = React.useCallback(
//   ({ clientX, clientY }) => {
//     setCoords({ x: clientX, y: clientY });
//   },
//   [setCoords]
// );

// useEventListener('mousemove', updateCoords);
