//components
import Router from "./Routes";
///styles
import ThemeContext from "./context/ThemeContext";
import "./App.css";
import { useIsFetching } from "react-query";
import { GlobalLoader } from "./components";
const App = () => {
  return (
    <ThemeContext>
      <Router />
    </ThemeContext>
  );
};

export default App;
