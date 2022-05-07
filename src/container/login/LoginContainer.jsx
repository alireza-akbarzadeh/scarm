import React from "react";
import { Link } from "react-router-dom";
import Path from "../../constant/Path";
import { Button, Input } from "../../components";
const LoginContainer = () => {
  return (
    <div>
      <h4>Start For Free</h4>
      <div>Create A New Account</div>
      <div>
        Already a Memmber? <Link to={Path.Login}>Login</Link>
      </div>
      <form>
        <Input />
        <Button />
        <Button />
      </form>
    </div>
  );
};

export default LoginContainer;
