//components
import Router from "./Routes";
///styles
import ThemeContext from "./context/ThemeContext";
import "./App.css";

const App = () => {
  return (
    <ThemeContext>
      <Router />
    </ThemeContext>
  );
};

export default App;
