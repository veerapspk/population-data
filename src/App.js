import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import About from "./components/About";
import CryptoCurrency from "./components/CryptoCurrency";
import PopulationData from "./components/PopulationData";
import SideNavbar from "./components/SideNavbar";

import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/population-data" element={<PopulationData />} />
      <Route path="/crypto-currency" element={<CryptoCurrency />} />
    </Routes>
  </Router>
);

export default App;
