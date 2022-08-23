import { InfoContainer } from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
function DashBoardInfos({}) {
  const [totalUnits, setTotalUnits] = useState(0);
  const [activeUnits, setActiveUnits] = useState("");
  const [inactiveUnits, setInactiveunits] = useState("");
  const [averageKw, setAverageKw] = useState(0);

  let unitsActive = [];
  let unitsInactive = [];

  useEffect(() => {
    async function handleGetDashBoardInfos() {
      await axios.get(" http://localhost:3333/unidades").then(response => {
        setTotalUnits(response.data.length);
        response.data.filter(item => {
          if (item.isActive === true) {
            unitsActive.push(item.id);
            setActiveUnits(unitsActive.length);
          }
          if (item.isActive === false) {
            unitsInactive.push(item.id);
            setInactiveunits(unitsInactive.length);
          }
        });
      });
    }
    handleGetDashBoardInfos();
  }, []);

  useEffect(() => {
    async function handleAverageEnergy() {
      await axios.get(" http://localhost:3333/geracoes").then(response => {
        let sumKw = 0;
        response.data.forEach(item => {
          sumKw += parseInt(item.kw);
        });
        if (sumKw === 0) {
          setAverageKw("0");
        } else {
          setAverageKw((sumKw / unitsActive.length).toFixed(0));
        }
      });
    }
    handleAverageEnergy();
  }, []);

  return (
    <InfoContainer>
      <div>
        <p>Total Unidades</p>
        <span>{totalUnits}</span>
      </div>
      <div>
        <p>Unidades Ativas</p>
        <span>{activeUnits ? activeUnits : "0"}</span>
      </div>
      <div>
        <p>Unidades inativas</p>
        <span>{inactiveUnits ? inactiveUnits : "0"}</span>
      </div>
      <div>
        <p>Média de energia</p>
        <span>{averageKw + " Kw"}</span>
      </div>
    </InfoContainer>
  );
}

export default DashBoardInfos;
