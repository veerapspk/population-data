import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./components/Home";

import CryptoCurrency from "./components/CryptoCurrency";
import PopulationData from "./components/PopulationData";

import "./App.css";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/population-data" element={<PopulationData />} />
      <Route path="/crypto-currency" element={<CryptoCurrency />} />
    </Routes>
  </Router>
);

export default App;
