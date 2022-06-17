import React from "react";
const useGetSet = (initialState) => {
  const state = React.useRef(initialState);
  const [, update] = React.useReducer(() => ({}));

  return React.useMemo(
    () => [
      () => state.current,
      (newState) => {
        state.current = newState;
        update();
      },
    ],
    []
  );
};

export default useGetSet;

// const [getCount, setCount] = useGetSet(0);
//   const onClick = () => {
//     setTimeout(() => {
//       setCount(getCount() + 1);
//     }, 1_000);
//   };
