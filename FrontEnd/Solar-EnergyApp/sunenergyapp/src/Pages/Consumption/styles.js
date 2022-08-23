import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-start;
  margin-left: 130px;
  margin-top: 100px;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 1.2rem;
    font-weight: 700;
    color: #374557;
    margin-bottom: 0.5rem;
    font-family: Raleway;
    color: #53575d;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    padding: 0 15px;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #374557;
    font-family: Raleway;
    margin-top: 1rem;
  }
`;
