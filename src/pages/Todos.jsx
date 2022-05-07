import React from "react";
import { Todo } from "../components";
import usePost from "../Hook/usePost";

const Todos = () => {
  const post = usePost();

  return <Todo />;
};

export default Todos;
