import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { notify } from "../../utils/Functions/Functions";

import Button from "../../Components/Button/Button";

import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";
import SideMenu from "../../Components/SideMenu/SideMenu";

import { StyledForm } from "./styles";

function Consumption() {
  const [unity, setUnity] = useState("");
  const [date, setDate] = useState("");
  const [kw, setKw] = useState("");
  const [unitOptions, setUnitOptions] = useState([]);
  const [jsonInfos, setJsonInfos] = useState([]);

  useEffect(() => {
    function getGetUnityGenerations() {
      axios.get("http://localhost:3333/geracoes").then(response => {
        setJsonInfos(response.data);
      });
    }
    getGetUnityGenerations();
  }, [date]);

  function handleSubmit(e) {
    for (const info of jsonInfos) {
      if (info.unity_id === unity && info.date === date) {
        notify("Essa unidade ja possui geracao para essa data!", "error");
        e.preventDefault();
        return;
      }
    }
    axios.post("http://localhost:3333/geracoes", {
      unity_id: unity,
      date: date,
      kw: kw,
    });
    try {
      notify("success", "Geracao cadastrada com sucesso!");
    } catch (err) {
      notify("error", "Erro ao cadastrar geracao!");
    }
  }

  useEffect(() => {
    async function loadUnityOptions() {
      await axios.get("http://localhost:3333/unidades").then(response => {
        const data = response.data.filter(unit => unit.isActive === true);
        setUnitOptions(data);
      });
    }
    loadUnityOptions();
  }, [unity]);

  return (
    <SideMenu title="Lançamento de geração mensal">
      <StyledForm onSubmit={handleSubmit}>
        <label>Unidade geradora:</label>
        <Select
          options={unitOptions}
          onChange={e => setUnity(e.target.value)}
        />
        <Input
          type="month"
          name="month"
          label="Mês/ano"
          placeholder="01 / 2022"
          onChange={e => {
            setDate(e.target.value);
          }}
        />
        <Input
          type="number"
          name="total"
          placeholder="80"
          label="Total kw gerado"
          onChange={e => {
            setKw(e.target.value);
          }}
        />
        <Button description="Cadastrar" textPosition="start" type="submit" />
      </StyledForm>
      <Toaster position="top" />
    </SideMenu>
  );
}

export default Consumption;
