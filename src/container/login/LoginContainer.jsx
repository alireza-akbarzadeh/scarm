import React from "react";
import { Link } from "react-router-dom";
import Path from "../../constant/Path";
import { Button, Container, Row, Typography } from "../../components";
import { FormContainer, LoginInput } from "./Login.styled";
import { BsFillFilePersonFill, BsEye } from "react-icons/bs";

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
          Welocme To Our Scarm <span className="dot" />
        </Typography>
        <Typography
          textTransform="uppercase"
          fontSize="17px"
          fontWeight="600"
          color="#9aa5b5"
        >
          Dont Have a Account?{" "}
          <Link className="login_insted" to={Path.Register}>
            Register
          </Link>
        </Typography>
        <form>
          <Row direction="column" space="25px">
            <LoginInput
              icon={<BsFillFilePersonFill color="#9c9da2" fontSize={18} />}
              label="first Name"
              type="text"
            />
            <LoginInput
              icon={<BsEye color="#9c9da2" fontSize={18} />}
              label="password"
              type="password"
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
        </form>
      </FormContainer>
    </Container>
  );
};

export default LoginContainer;
