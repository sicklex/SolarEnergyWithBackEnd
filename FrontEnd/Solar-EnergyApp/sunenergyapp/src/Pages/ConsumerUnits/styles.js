import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-left: 60px;
  margin-top: 2rem;

  h2 {
    font-size: 28px;
    font-weight: 700;
    font-family: Poppins;
    color: #374557;
    margin-bottom: 4rem;
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 4px;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    font-family: Raleway;
    color: #53575d;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border: 1px solid #53575d;
  }
`;

export const StyledInput = styled.div`
  width: 100%;
  input {
    max-width: 25%;
    height: 40px;
    border-radius: 5px;
    padding: 0 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    color: #374557;
    font-family: Raleway;
    color: #53575d;
    display: flex;
  }
`;

export const CheckBoxInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 29px;
    margin-left: 1rem;
  }
  label {
    font-size: 24px;
    font-weight: 500;
    color: #374557;
    font-family: Poppins;
    color: #000000;
    margin-right: 1rem;
  }
`;
