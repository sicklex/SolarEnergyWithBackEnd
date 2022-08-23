import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;

  div {
    width: 50%;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #a098ae;
    margin-top: 100px;
    align-self: center;
    width: 100%;
  }
`;

export const StyledTable = styled.table`
  width: 80%;
  border-radius: 5px;
  margin-top: 30px;
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  th {
    font-size: 16px;
    line-height: 24px;
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #c6cbd1;
    font-weight: 700;
    font-family: raleway;
  }

  td {
    color: #53575d;
    font-size: 16px;
    line-height: 24px;
    padding: 10px;
    font-family: "Raleway", sans-serif;

    &:nth-child(6),
    :nth-child(7) {
      width: 100px;
    }
  }
`;

export const StyledTbody = styled.tbody`
  border-bottom: 1px solid #c6cbd1;
`;

export const StyledTr = styled.thead`
  background: rgba(232, 232, 232, 0.3);
`;

export const EditButton = styled.button`
  background-color: #8db51b;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 16px;
  border: none;
  color: #fff;
  line-height: 24px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 16px;
`;

export const RemoveButton = styled.button`
  background-color: #d82d56;
  border-radius: 4px;
  cursor: pointer;
  padding: 8px 16px;
  border: none;
  color: #fff;
  line-height: 24px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const NewUnitButton = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;
