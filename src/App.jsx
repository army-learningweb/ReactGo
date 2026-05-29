import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import FreeLancerPage from "./pages/FreelancerPage";
import Counter from "./components/stateUpdateUI/Counter";
import WelcomeForm from "./components/stateUpdateUI/WelcomeForm";
import Arrcordian from "./components/stateUpdateUI/Arrcordian";
function App() {
  return (
    <>
      <FreeLancerPage/>
    </>
  );
}

export default App;
