import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import SideMenu from "../../Components/SideMenu/SideMenu";
import { CheckBoxInput, StyledForm, StyledInput } from "./styles";

function EditConsumerUnit() {
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const { id } = useParams();

  async function handleEditConsumerUser() {
    const response = await axios.get(`http://localhost:3333/unidades/${id}`);
    const { nickname, address, brand, model, isActive } = response.data;
    setNickname(nickname);
    setAddress(address);
    setBrand(brand);
    setModel(model);
    setIsActive(isActive);
  }

  useEffect(() => {
    handleEditConsumerUser();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      axios.put(`http://localhost:3333/unidades/${id}`, {
        nickname: nickname,
        address: address,
        brand: brand,
        model: model,
        isActive: isActive,
      });
    } catch (err) {
      alert("Erro ao cadastrar consumo");
    }

    navigate("/units");
  }

  return (
    <SideMenu title="Unidades">
      <StyledForm onSubmit={handleSubmit}>
        <h2> Edição de Unidade Geradora</h2>
        <Input
          type="text"
          placeholder="Painel 1"
          label="Apelido"
          onChange={e => {
            setNickname(e.target.value);
          }}
          value={nickname}
        />
        <StyledInput>
          <Input
            type="text"
            placeholder="Rua Alberto 430"
            label="Local"
            onChange={e => {
              setAddress(e.target.value);
            }}
            value={address}
          />
          <Input
            type="text"
            placeholder="Resun"
            label="Marca"
            onChange={e => {
              setBrand(e.target.value);
            }}
            value={brand}
          />
          <Input
            type="text"
            placeholder="155w"
            label="Modelo"
            onChange={e => {
              setModel(e.target.value);
            }}
            value={model}
          />
        </StyledInput>
        <CheckBoxInput>
          <Input
            type="checkbox"
            onChange={e => {
              setIsActive(e.target.checked);
            }}
            checked={isActive}
          />
          <label>Ativo</label>
        </CheckBoxInput>
        <Button description="Salvar" type="submit" />
      </StyledForm>
    </SideMenu>
  );
}

export default EditConsumerUnit;
