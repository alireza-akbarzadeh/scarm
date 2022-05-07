import React from "react";
import { Link } from "react-router-dom";
import Path from "../../constant/Path";
import { Button, Container, Input, Row, Typography } from "../../components";
import { FormContainer } from "./register.styled.js";
const LoginContainer = () => {
  return (
    <Container style={{ marginTop: 80 }} center={false} maxWidth="sm">
      <Typography>Start For Free</Typography>
      <div>Create A New Account</div>
      <div>
        Already a Memmber? <Link to={Path.Login}>Login</Link>
      </div>
      <FormContainer>
        <Row>
          <Input />
          <Input />
        </Row>
        <Input />
        <Input />
        <Row>
          <Button />
          <Button />
        </Row>
      </FormContainer>
    </Container>
  );
};

export default LoginContainer;
