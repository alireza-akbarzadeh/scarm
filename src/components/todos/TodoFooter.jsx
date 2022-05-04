import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TodoFooter = () => {
  const { todos, status, setStatus, clearCompleteHandler } =
    useContext(AppContext);

  return (
    <div className="Todo_Footer">
      <div className="Todo_Count">
        <span className="Todo_Count_number">{todos.length}</span>
        <span>Items Left</span>
      </div>
      <div className="Todo_Sort">
        <button
          onClick={() => setStatus("all")}
          className={`default_Btn ${status === "all" ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => setStatus("active")}
          className={`default_Btn ${status === "active" ? "active" : ""}`}
        >
          Active
        </button>
      </div>
      <div className="Todo_Clear">
        <button onClick={clearCompleteHandler} type="button">
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default TodoFooter;
