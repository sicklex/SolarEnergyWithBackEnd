import React, { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { notify } from "../../utils/Functions/Functions";
import { useEffect } from "react/cjs/react.development";
import Button from "../../Components/Button/Button";
import SideMenu from "../../Components/SideMenu/SideMenu";
import { useNavigate } from "react-router-dom";

import {
  EditButton,
  NewUnitButton,
  RemoveButton,
  StyledTable,
  StyledTbody,
  StyledTr,
  TableContainer,
} from "./styles";

function Units() {
  const [unitsList, setUnitsList] = useState([]);

  const navigate = useNavigate();

  function HandleEditButton(e) {
    navigate(`/consumerUnits/edit/${e.target.id}`);
  }

  async function handleGetUnits() {
    axios.get("http://localhost:3333/unidades").then(response => {
      const data = response.data;
      setUnitsList(data);
    });
  }

  function HandleRemoveButton(e) {
    e.preventDefault();
    axios.get(`http://localhost:3333/geracoes/`).then(response => {
      const data = response.data;
      let filteredData = data.filter(unit => unit.unity_id === e.target.id);
      filteredData.map(unit => {
        axios.delete(`http://localhost:3333/geracoes/${unit.id}`);
      });
      axios.delete(`http://localhost:3333/unidades/${e.target.id}`);
      notify("Unidade removida com sucesso!", "success");

      handleGetUnits();
    });
  }

  useEffect(() => {
    handleGetUnits();
  }, []);

  return (
    <SideMenu title="Unidades">
      <TableContainer>
        <div>
          <h2>
            <strong>Lista de unidades</strong>
          </h2>
        </div>
        <StyledTable>
          <StyledTr>
            <tr>
              <th>ID</th>
              <th>Apelido</th>
              <th>Local</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th></th>
              <th></th>
            </tr>
          </StyledTr>
          <StyledTbody>
            {unitsList.map(unit => (
              <tr key={unit.id}>
                <td>{unit.id}</td>
                <td>{unit.nickname}</td>
                <td>{unit.address}</td>
                <td>{unit.brand}</td>
                <td>{unit.model}</td>
                <td>
                  <EditButton id={unit.id} onClick={HandleEditButton}>
                    Editar
                  </EditButton>
                </td>
                <td>
                  <RemoveButton id={unit.id} onClick={HandleRemoveButton}>
                    Remover
                  </RemoveButton>
                </td>
              </tr>
            ))}
          </StyledTbody>
        </StyledTable>
        <NewUnitButton>
          <Button
            description="Nova unidade"
            onClick={() => {
              navigate("/consumerunits");
            }}
          />
        </NewUnitButton>
      </TableContainer>
      <Toaster position="top" />
    </SideMenu>
  );
}

export default Units;
