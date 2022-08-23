import React from "react";

import { StyledSelect } from "./styles";

function Select({ options, onChange }) {
  return (
    <>
      <StyledSelect defaultValue="" onChange={onChange}>
        <option disabled value="">
          Selecione uma opção
        </option>
        {options.map(option => {
          return (
            <option key={option.id} value={option.id}>
              {option.nickname}
            </option>
          );
        })}
      </StyledSelect>
    </>
  );
}

export default Select;
