import React from "react";
import { StyledLabel } from "./styles";

function Input({ label, ...rest }) {
  return (
    <>
      <StyledLabel>
        {label}
        <input {...rest} />
      </StyledLabel>
    </>
  );
}

export default Input;
