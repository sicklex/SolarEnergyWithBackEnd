import "./App.css";
import Logon from "./Pages/Logon";
import Units from "./Pages/Units/Units";
import Consumption from "./Pages/Consumption/Consumption";
import { Routes, Route } from "react-router-dom";
import ConsumerUnits from "./Pages/ConsumerUnits/ConsumerUnits";
import DashBoard from "./Pages/DashBoard/Dashboard";
import EditConsumerUnit from "./Pages/EditConsumerUnits/EditConsumerUnits";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Logon />} />
      <Route path="/Units" element={<Units />} />
      <Route path="/consumption" element={<Consumption />} />
      <Route path="/ConsumerUnits" element={<ConsumerUnits />} />
      <Route path="/DashBoard" element={<DashBoard />} />
      <Route path="/consumerUnits/edit/:id" element={<EditConsumerUnit />} />
    </Routes>
  );
}

export default App;
