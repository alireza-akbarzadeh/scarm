import React from "react";
const useComponentDidUpdate = (callback, condition) => {
  const mounted = React.useRef(false);
  React.useEffect(() => {
    if (mounted.current) callback();
    else mounted.current = true;
  }, condition);
};

export default useComponentDidUpdate;
// usage
//   const [value, setValue] = React.useState(0);
// useComponentDidUpdate(() => {
//     console.log(`Current value is ${value}.`);
//   }, [value]);

{
  /* <button onClick={() => setValue(value + 1)}>Increment value</button>
<button onClick={() => setOtherValue(otherValue + 1)}>
  Increment other value
</button> */
}
