import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { notify } from "../../utils/Functions/Functions";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import SideMenu from "../../Components/SideMenu/SideMenu";

import axios from "axios";
import { CheckBoxInput, StyledForm, StyledInput } from "./styles";

function ConsumerUnits() {
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (nickname === "" || address === "" || brand === "" || model === "") {
      notify("Preencha todos os campos", "error");
      return;
    } else {
      try {
        axios.post("http://localhost:3333/unidades", {
          nickname: nickname,
          address: address,
          brand: brand,
          model: model,
          isActive: isActive,
        });
      } catch (err) {
        alert("Erro ao cadastrar consumo");
      }
    }
    navigate("/units");
  }

  return (
    <SideMenu title="Unidades">
      <StyledForm onSubmit={handleSubmit}>
        <h2>Cadastro de Unidade Geradora</h2>
        <Input
          type="text"
          placeholder="Painel 1"
          label="Apelido"
          onChange={e => {
            setNickname(e.target.value);
          }}
        />
        <StyledInput>
          <Input
            type="text"
            placeholder="Rua Alberto 430"
            label="Local"
            onChange={e => {
              setAddress(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="Resun"
            label="Marca"
            onChange={e => {
              setBrand(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder="155w"
            label="Modelo"
            onChange={e => {
              setModel(e.target.value);
            }}
          />
        </StyledInput>
        <CheckBoxInput>
          <Input
            type="checkbox"
            onChange={e => {
              setIsActive(e.target.checked);
            }}
          />
          <label>Ativo </label>
        </CheckBoxInput>
        <Button description="Salvar" type="submit" />
      </StyledForm>
      <Toaster position="top" />
    </SideMenu>
  );
}

export default ConsumerUnits;
