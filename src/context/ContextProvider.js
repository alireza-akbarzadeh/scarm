import { createContext, useContext, useReducer } from "react";

const Context = createContext(null);

const initialState = {
  isSidebar: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "isSidebar":
      return { ...state, isSidebar: !state.isSidebar };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const useMangeContext = () => useContext(Context);
