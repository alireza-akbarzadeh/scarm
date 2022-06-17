import React from "react";

const useEffectOnce = (callback, when) => {
  const hasRunOnce = React.useRef(false);
  React.useEffect(() => {
    if (when && !hasRunOnce.current) {
      callback();
      hasRunOnce.current = true;
    }
  }, [when]);
};
export default useEffectOnce;

// const [clicked, setClicked] = React.useState(false);
// useEffectOnce(() => {
//   console.log('mounted');
// }, clicked);
// return <button onClick={() => setClicked(true)}>Click me</button>;
