import React from "react";
import { Link } from "react-router-dom";
import Path from "../../constant/Path";
import { Button, Container, Row, Typography } from "../../components";
import { FormContainer, RegisterInput } from "./register.styled.js";
import { BsFillFilePersonFill, BsEye } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

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
          <RegisterInput
            icon={<BsFillFilePersonFill color="#9c9da2" fontSize={18} />}
            label="first Name"
            type="text"
          />
          <RegisterInput
            type="text"
            icon={<BsFillFilePersonFill color="#9c9da2" fontSize={18} />}
            label="last Name"
          />
        </Row>
        <RegisterInput
          label="Email"
          type="email"
          icon={<HiOutlineMail color="#9c9da2" fontSize={18} />}
        />
        <RegisterInput
          label="password"
          type="password"
          icon={<BsEye color="#9c9da2" fontSize={18} />}
        />
        <Row className="mt-15">
          <Button
            size="large"
            rounded={"50px"}
            fullWidth
            txtColor="#d3e9fd"
            color="#555b69"
            txt="Change Method"
          />
          <Button
            size="large"
            fullWidth
            rounded={"50px"}
            txtColor="#d3e9fd"
            color="secondary"
            txt="Create Account"
          />
        </Row>
      </FormContainer>
    </Container>
  );
};

export default LoginContainer;
