import styled from "styled-components";
import { base } from "../../constant/theme";
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

export { FormContainer };
