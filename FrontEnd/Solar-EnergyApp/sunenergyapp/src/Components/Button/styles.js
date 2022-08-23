import styled from "styled-components";

export const StyledButton = styled.button`
  width: 190px;
  height: 40px;
  border-radius: 15px;
  background-color: #4c5df1;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0px 20px 50px 0px #3745571a;
  font-family: Poppins;
  cursor: pointer;

  &:hover {
    background-color: #061ac9;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 0.3s;
  }
`;
