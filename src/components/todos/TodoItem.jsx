import React, { useContext } from "react";
///Context
import { AppContext } from "../../context/AppContext";
const TodoItem = () => {
  const {
    deleteHandler,
    completeHandler,
    editHandler,
    editRef,
    editText,
    setEditText,
    filterTodo,
  } = useContext(AppContext);

  return (
    <>
      {filterTodo.length === 0 ? (
        <div data-testid="todo-item" className="Todo_item Create_Todo">
          There is nothing todo
        </div>
      ) : (
        filterTodo?.map((todo, index) => (
          <div
            title="Double Click For Edit Todo"
            onDoubleClick={(e) =>
              editHandler({ value: todo.id, e, isEdit: false })
            }
            key={todo.id + index}
            className={`Todo_item ${todo.Completed ? "Completed_Todo" : ""}`}
          >
            <div
              key={todo.id}
              className="inline_Elelment"
              style={{ width: "100%" }}
            >
              <input
                onClick={() => completeHandler(todo.id)}
                className="checkbox"
                type="checkbox"
                defaultChecked={todo.Completed}
              />
              <form style={{ width: "100%" }}>
                <input
                  ref={editRef}
                  type="text"
                  placeholder={todo.text}
                  value={todo.edit ? editText : todo.text}
                  onChange={(e) => setEditText(e.target.value)}
                  disabled={todo.edit === false}
                  style={
                    todo.Completed
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                  className={`input-control ${todo.edit ? "Input_Active" : ""}`}
                />
                {/* <p
                  style={
                    todo.Completed
                      ? { textDecoration: "line-through" }
                      : { textDecoration: "none" }
                  }
                  className={`input-control ${todo.edit ? "Input_Active" : ""}`}
                >
                  {todo.text}
                </p> */}
                <input
                  onClick={(e) =>
                    editHandler({ value: todo.id, e, isEdit: true })
                  }
                  type="submit"
                  hidden
                />
              </form>
            </div>
            <span onClick={() => deleteHandler(todo.id)} className="Del">
              &times;
            </span>
          </div>
        ))
      )}
    </>
  );
};

export default TodoItem;
