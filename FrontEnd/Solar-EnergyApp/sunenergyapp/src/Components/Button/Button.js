import React from "react";

import { StyledButton } from "./styles";

function Button({ description, textPosition, ...rest }) {
  return (
    <StyledButton {...rest} style={{ textAlign: textPosition }}>
      <span>{description}</span>
    </StyledButton>
  );
}

export default Button;
