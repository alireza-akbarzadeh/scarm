import React from "react";

const useMergeState = (initialState = {}) => {
  const [value, setValue] = React.useState(initialState);

  const mergeState = (newState) => {
    if (typeof newState === "function") newState = newState(value);
    setValue({ ...value, ...newState });
  };

  return [value, mergeState];
};

// usage
// const [data, setData] = useMergeState({ name: 'John', age: 20 });
{
  /* <input
value={data.name}
onChange={e => setData({ name: e.target.value })}
/>
<button onClick={() => setData(({ age }) => ({ age: age - 1 }))}>
-
</button>
{data.age}
<button onClick={() => setData(({ age }) => ({ age: age + 1 }))}>
+
</button> */
}
