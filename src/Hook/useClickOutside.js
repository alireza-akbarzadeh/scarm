import React from "react";

const useClickOutside = (elRef, callback) => {
  const callBackRef = React.useRef();
  callBackRef.current = callback;
  React.useEffect(() => {
    const handleClickOutSide = (e) => {
      if (elRef.current.contains(e.target) && callBackRef.current)
        callBackRef.current(e);
    };
    document.addEventListener("click", handleClickOutSide, true);
    return () => {
      document.removeEventListener("click", handleClickOutSide, true);
    };
  }, [elRef, callback]);
};

export default useClickOutside;
