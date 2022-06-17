// utils/useWindowSize.js

import React from "react";

export default function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}

// const useWindowSize = () => {
//     const [windowSize, setWindowSize] = React.useState({
//       width: undefined,
//       height: undefined,
//     });

//     React.useEffect(() => {
//       const handleResize = () =>
//         setWindowSize({ width: window.innerWidth, height: window.innerHeight });

//       window.addEventListener('resize', handleResize);

//       handleResize();

//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }, []);

//     return windowSize;
//   };
