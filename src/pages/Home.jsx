import React, { useState } from "react";
import { Todo } from "../components";

const Home = () => {
  const [first, setFirst] = useState(undefined);

  return <div>{first ?? <Todo />}</div>;
};

export default Home;
