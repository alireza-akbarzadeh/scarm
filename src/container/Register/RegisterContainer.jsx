import React from "react";
import { Link } from "react-router-dom";
import Path from "../../constant/Path";
import { Button, Container, Input, Row, Typography } from "../../components";
import { FormContainer } from "./register.styled.js";
const LoginContainer = () => {
  return (
    <Container style={{ marginTop: 80 }} center={false} maxWidth="sm">
      <FormContainer>
        <Typography
          textTransform="uppercase"
          fontSize="17px"
          fontWeight="600"
          color="#9aa5b5"
        >
          Start For Free
        </Typography>
        <Typography
          className="inline_element"
          fontSize="35px"
          color="#fff"
          fontWeight="700"
        >
          Create A New Account <span className="dot" />
        </Typography>
        <Typography
          textTransform="uppercase"
          fontSize="17px"
          fontWeight="600"
          color="#9aa5b5"
        >
          Already a Memmber?{" "}
          <Link className="login_insted" to={Path.Login}>
            Login
          </Link>
        </Typography>
        <Row>
          <Input />
          <Input />
        </Row>
        <Input />
        <Input />
        <Row>
          <Button txt="Change Method" />
          {/* <Button txt="Create Account" /> */}
        </Row>
      </FormContainer>
    </Container>
  );
};

export default LoginContainer;
