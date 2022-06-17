import React from "react";

const usePersistedState = (name, defaultValue) => {
  const [value, setValue] = React.useState(defaultValue);
  const storRef = React.useRef(name);
  React.useEffect(() => {
    try {
      const storedValue = localStorage.getItem(name);
      if (storedValue !== null) setValue(storedValue);
      else localStorage.setItem(name, defaultValue);
    } catch {
      setValue(defaultValue);
    }
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem(storRef.current, value);
    } catch {}
  }, [value]);

  React.useEffect(() => {
    const lastName = storRef.current;
    if (name !== lastName) {
      try {
        localStorage.setItem(name, value);
        storRef.current = name;
        localStorage.removeItem(lastName);
      } catch {}
    }
  }, [name]);

  return [value, setValue];
};

export default usePersistedState;

// usage
// const [val, setVal] = usePersistedState("local", 10);
// return (
//   <input
//     value={val}
//     onChange={(e) => {
//       setVal(e.target.value);
//     }}
//   />
// );
