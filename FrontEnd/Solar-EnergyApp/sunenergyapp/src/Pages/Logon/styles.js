import styled from "styled-components";
import solarplate from "../../utils/solarplate.png";
import { AiOutlineMail } from "react-icons/ai";
import { VscLock } from "react-icons/vsc";

export const Container = styled.div`
  display: flex;
  min-width: 100%;
  margin: 0 auto;
  background-color: #f5f5f5;
  height: 100vh;

  @media (max-width: 1026px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 506px) {
    background-color: white;
  }
`;

export const MainImg = styled.div`
  background-image: url(${solarplate});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 50%;
  opacity: 0.8;

  @media (max-width: 1026px) {
    background-image: none;
  }
`;

export const LoginContainer = styled.div`
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  img {
    width: 100%;
  }
  p {
    font-family: "Roboto Slab", serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #374557;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LoginIcon = styled(AiOutlineMail)`
  position: absolute;
  top: 41px;
  left: 15px;
  color: #a0aec0;
  font-size: 20px;
`;

export const PasswordIcon = styled(VscLock)`
  position: absolute;
  top: 122px;
  left: 15px;
  color: #a0aec0;
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
  font-size: 1.2rem;
  margin: 10px;
`;

export const InputType = styled.input`
  height: 60px;
  width: 400px;
  border-radius: 10px;
  margin-top: 20px;
  padding: 0 49px;
  border: 1px solid #a0aec0;

  &::placeholder {
    color: #a0aec0;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px 0 dodgerBlue;
    transition: 0.3s;
  }
`;
