import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 40px;
  gap: 60px;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e6e6e6;
    padding: 20px 0px;
    width: 200px;
    background-color: #fff;
    border-radius: 8px;

    &:hover {
      border-color: #3751ff;
      cursor: pointer;
      box-shadow: 0px 0px 10px rgba(55, 81, 255, 0.1);

      p {
        color: #3751ff;
      }
      span {
        color: #3751ff;
      }
    }
  }

  p {
    font-size: 19px;
    font-family: Mulish;
    font-weight: 700;
    color: #9fa2b4;
  }

  span {
    font-size: 30px;
    font-weight: 700;
    margin-top: 20px;
    color: #252733;
    font-family: Mulish;
  }
`;
