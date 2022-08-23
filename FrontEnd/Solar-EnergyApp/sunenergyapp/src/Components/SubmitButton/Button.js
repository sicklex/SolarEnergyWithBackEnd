import React from "react";

import { Button, ButtonContainer } from "./styles";

function SubmitButton({ onClick }) {
  return (
    <ButtonContainer>
      <Button type="submit" onClick={onClick}>
        Entrar
      </Button>
      ;
    </ButtonContainer>
  );
}

export default SubmitButton;
