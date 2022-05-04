import { createContext, useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import HTTP from "../helper/HTTP";
export const AppContext = createContext(null);
const AppProvider = ({ children }) => {
  const [inputText, setInputText] = useState("");
  const [editText, setEditText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);
  const editRef = useRef(null);
  const navigate = useNavigate();

  ///Set Input
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  /// create New Todo List
  const submiTodoHandler = (e) => {
    e.preventDefault();
    const data = {
      text: inputText,
      Completed: false,
      edit: false,
      id: uuidv4(),
    };
    HTTP(`todos`, {
      method: "post",
      data,
    });
    setTodos([...todos, data]);
    setInputText("");
  };
  /// Delete New Data
  const deleteHandler = (value) => {
    const filterData = todos.filter((i) => i.id !== value);
    setTodos(filterData);
    HTTP(`todos/${value}`, { method: "delete" });
  };
  /// Check  Tast it Don?
  const completeHandler = (value) => {
    const match = todos.map((item) => {
      if (item.id === value) {
        return {
          ...item,
          Completed: !item.Completed,
        };
      }
      return item;
    });
    const rest = match.filter((i) => i.id === value);
    const data = rest[0];
    HTTP(`todos/${value}`, { method: "put", data });
    setTodos(match);
  };

  /// Check How meny  Tast it Don?

  const clearCompleteHandler = () => {
    const filterData = todos.filter((i) => i.Completed === false);
    setTodos(filterData);
    // HTTP(`todos/${value}`, { method: "delete" });
  };

  //// Filter In Todo List
  const statusHandler = (val) => {
    if (status === "active") {
      setFilterTodo(todos.filter((todo) => todo.Completed === true));
    } else {
      setFilterTodo(todos);
    }
  };

  //// Edit Todo List

  const editHandler = ({ value, e, isEdit }) => {
    e.preventDefault();
    const filter = todos.filter((i) => i.id === value);
    let updateDateTodos = todos.map((todo) => {
      if (todo.id === value) {
        setEditText(filter[0].text);
        editRef.current.focus();
        return {
          ...todo,
          edit: !todo.edit,
          text: editText,
        };
      }
      return todo;
    });
    const data = {
      id: value,
      edit: false,
      text: editText,
      Completed: filter[0].Completed,
    };
    if (isEdit) {
      HTTP(`todos/${value}`, { method: "put", data });
    }
    setTodos(updateDateTodos);
  };

  //// Persist Data Wiht Local Storage

  const saveLocalTodos = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodo);
    }
  };

  useEffect(() => {
    HTTP("todos", { method: "GET" })
      .then((res) => setTodos(res.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    statusHandler();
    // navigate(`/?sort=${status}`);
  }, [todos, status]);

  return (
    <AppContext.Provider
      value={{
        inputText,
        setInputText,
        todos,
        setTodos,
        status,
        setStatus,
        filterTodo,
        editRef,
        setEditText,
        editText,
        editHandler,
        inputTextHandler,
        submiTodoHandler,
        deleteHandler,
        completeHandler,
        statusHandler,
        clearCompleteHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
