import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo2 from "../../utils/logo2.png";

import {
  Sidebar,
  Container,
  GraphicIcon,
  UnityIcon,
  GearIcon,
  Content,
  Li,
} from "./styles";

function SideMenu({ title, children }) {
  const [dashboardColor, setDashboardColor] = useState({
    backgroundColor: "",
    color: "",
  });
  const [unityColor, setUnityColor] = useState({
    backgroundColor: "",
    iconColor: "",
    unitBackgroundColor: "",
    color: "",
  });
  const [consumptionColor, setConsumptionColor] = useState({
    backgroundColor: "",
    color: "",
  });

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/dashboard") {
      setDashboardColor({
        backgroundColor: "#4cbc9a",
        color: "#fff",
      });
    } else if (path === "/units" || path === "/consumerunits") {
      setUnityColor({
        backgroundColor: "#4cbc9a",
        iconColor: "#4cbc9a",
        color: "#fff",
        unitBackgroundColor: "#fff",
      });
    } else if (path === "/consumption") {
      setConsumptionColor({
        backgroundColor: "#4cbc9a",
        color: "#fff",
      });
    }
  }, []);

  return (
    <Container>
      <Sidebar>
        <ul>
          <img src={logo2} alt="DevInHouse Logo" />
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Li style={{ backgroundColor: dashboardColor.backgroundColor }}>
              <GraphicIcon
                className="graphic-icon"
                style={{ color: dashboardColor.color }}
              />
              <p style={{ color: dashboardColor.color }}>Dashboard</p>
            </Li>
          </Link>
          <Link to="/units" style={{ textDecoration: "none" }}>
            <Li style={{ backgroundColor: unityColor.backgroundColor }}>
              <UnityIcon
                className="unity-icon"
                style={{
                  backgroundColor: unityColor.unitBackgroundColor,
                  color: unityColor.iconColor,
                }}
              />
              <p style={{ color: unityColor.color }}>Unidades</p>
            </Li>
          </Link>
          <Link to="/consumption" style={{ textDecoration: "none" }}>
            <Li style={{ backgroundColor: consumptionColor.backgroundColor }}>
              <GearIcon
                className="gear-icon"
                style={{ color: consumptionColor.color }}
              />
              <p style={{ color: consumptionColor.color }}>
                Cadastro de energia gerada
              </p>
            </Li>
          </Link>
        </ul>
      </Sidebar>
      <Content>
        <div>
          <h1>{title}</h1>
        </div>
        {children}
      </Content>
    </Container>
  );
}

export default SideMenu;

// pass the SideMenu as children to the main container
