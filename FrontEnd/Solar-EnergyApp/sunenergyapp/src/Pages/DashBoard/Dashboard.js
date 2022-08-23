import React, { useEffect, useState } from "react";
import axios from "axios";
import SideMenu from "../../Components/SideMenu/SideMenu";
import { StyledLine } from "./styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import DashBoardInfos from "../../Components/DashBoardInfos/DashBoardInfos";

const MONTHOPTIONS = [
  {
    1: "Janeiro",
    2: "Fevereiro",
    3: "Março",
    4: "Abril",
    5: "Maio",
    6: "Junho",
    7: "Julho",
    8: "Agosto",
    9: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro",
  },
];

function DashBoard() {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const GENERATION_KW_MONTH = {};

  let infoKw = [];
  let infoDate = [];

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  useEffect(() => {
    // Get data from API
    async function handleGetDashBoardInfos() {
      await axios.get(" http://localhost:3333/geracoes").then(response => {
        response.data.reduce((accumulator, currentValue) => {
          // Return the accumulator if the currentValue is not in the accumulator
          if (accumulator[currentValue.date]) {
            accumulator[currentValue.date] += parseInt(currentValue.kw);
          } else {
            accumulator[currentValue.date] = parseInt(currentValue.kw);
          }
          return accumulator;
        }, GENERATION_KW_MONTH);
      });

      // Return object as array of [date, kw]
      for (const [key, value] of Object.entries(GENERATION_KW_MONTH)) {
        infoKw.push(value);
        infoDate.push(key);
        infoDate.sort();
      }

      setChartData({
        labels: infoDate.map(item => {
          let month = item.substring(item.indexOf("-") + 2);
          month = parseInt(month);
          return MONTHOPTIONS[0][month] + "-" + item.substring(0, 4);
        }),
        datasets: [
          {
            label: "Kw",
            data: infoKw,
            backgroundColor: "#2196F3",
            borderColor: "#2196F3",
            borderWidth: 1,
          },
        ],
      });
    }

    handleGetDashBoardInfos();
  }, []);

  return (
    <SideMenu title="DashBoard" url="dashboard">
      <DashBoardInfos />
      <StyledLine>
        <div>
          <Line
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Total de energia gerada por mês",
                  align: "start",
                  fontColor: "black",
                },
                subtitle: {
                  display: false,
                  text: "",
                },
              },
              responsive: true,
            }}
          />
        </div>
      </StyledLine>
    </SideMenu>
  );
}

export default DashBoard;
