import React from "react";
import usePost from "../Hook/usePost";
import Todo from "../features/Todos/TodosList";
const Todos = () => {
  const post = usePost();

  return <Todo />;
};

export default Todos;
