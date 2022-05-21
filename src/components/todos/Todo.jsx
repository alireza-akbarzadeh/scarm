import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../context/AppContext";
///Components

import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
import { ThemePreferenceContext } from "../../context/ThemeContext";

const Todo = () => {
  const { inputTextHandler, inputText, submiTodoHandler } =
    useContext(AppContext);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <div className="Todo">
          <h3 className="Todo_Head">Todo</h3>
          <div className="Todo_Box">
            <div className="Todo_Box_Bar" />
            <div className="Todo_Box_Body">
              <div className="Todo_Box_Tasks">
                <form action="">
                  <input
                    ref={inputRef}
                    onChange={(e) => inputTextHandler(e)}
                    type="text"
                    value={inputText}
                    placeholder="What needs to be done ?"
                  />
                  <input onClick={submiTodoHandler} type="submit" hidden />
                </form>
              </div>
              <TodoItem />
            </div>
            <TodoFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
