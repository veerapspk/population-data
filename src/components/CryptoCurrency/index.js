import { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";

import SideNavbar from "../SideNavbar";
import CryptoCard from "../CryptoCard";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./index.css";

const apiConstants = {
  initial: "initial",
  loading: "loading",
  success: "success",
  failure: "fail",
};

const PopulationData = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [apiStatus, setApiStatus] = useState("initial");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setApiStatus(apiConstants.loading);

    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    if (response.ok) {
      const fetchedData = await response.json();

      setCryptoData(fetchedData);
      setApiStatus(apiConstants.success);
    } else {
      setApiStatus(apiConstants.failure);
    }
  };

  const onRetryBtn = () => {
    fetchData();
  };

  const renderResultPage = () => {
    switch (apiStatus) {
      case apiConstants.success:
        return renderSuccessView();
      case apiConstants.loading:
        return renderLoader();
      case apiConstants.failure:
        return renderFailureView();

      default:
        return null;
    }
  };

  const renderSuccessView = () => (
    <div className="crypto-details-container">
      <h1 className="population-heading">{cryptoData.chartName}</h1>
      <p className="crypto-date">
        Updated on : <span className="date">{cryptoData.time.updated}</span>
      </p>
      <CryptoCard pricesData={cryptoData.bpi} />

      <p className="crypto-description">{cryptoData.disclaimer}</p>
      <Footer />
    </div>
  );
  const renderLoader = () => (
    <div className="loader-container">
      <RingLoader size={120} color={" rgb(0, 255, 89)"} />
    </div>
  );
  const renderFailureView = () => (
    <div className="loader-container">
      <h1 className="error-text">Something Went Wrong Please Try Again</h1>
      <button className="retry-btn" type="button" onClick={onRetryBtn}>
        Retry
      </button>
    </div>
  );
  console.log(cryptoData);

  return (
    <div className="population-main-container">
      <SideNavbar active="Crypto-Currency" />
      <div className="population-container">
        <div className="population-nav-section">
          <Navbar />
        </div>
        {renderResultPage()}
      </div>
    </div>
  );
};

export default PopulationData;
