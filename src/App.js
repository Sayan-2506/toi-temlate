import React from "react";
import "./App.css";
import { Front } from "./components";
import Info from "./components/Info";
import Program from "./components/Program";
import DresCode from "./components/DresCode";
import Countdown from "./components/countdown/Countdown";
import Form from "./components/Form";
import PartyImage from "./components/PartyImage";

function App() {
  return (
    <div className="App">
      <Front />
      <Info />
      <Program />
      <DresCode />
      <Countdown timeTillDate="05 27 2023, 8:00 p" timeFormat="MM DD YYYY, h:mm p" />
      <Form />
      <PartyImage />
    </div>
  );
}

export default App;
