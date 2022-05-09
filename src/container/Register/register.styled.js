import styled from "styled-components";
import { Input } from "../../components";
const FormContainer = styled.div`
  max-width: 500px;
  display: flex;
  gap: 29px;
  flex-direction: column;

  .dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #1f7dd1;
    display: block;
    margin-top: 23px;
    display: block;
  }
  .login_insted {
    color: #1f7dd1;
    text-decoration: none;
    font-weight: 500;
  }
`;

const RegisterInput = styled(Input)`
  input {
    color: #faf8f9;
    background-color: ${({ theme }) => theme.blue_800};
  }
  input:focus {
    background: #3d404b;

    &:focus + .label_Handler::before {
      background: ${({ theme }) => theme.blue_800};
      color: #fff;
    }
  }
`;

export { FormContainer, RegisterInput };
