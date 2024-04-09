import { useState, useEffect } from "react";

import { RingLoader } from "react-spinners";

import SideNavbar from "../SideNavbar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import PopulationCard from "../PopulationCard";
import "./index.css";

const apiConstants = {
  initial: "initial",
  loading: "loading",
  success: "success",
  failure: "fail",
};

const PopulationData = () => {
  const [populationData, setPopulationData] = useState([]);
  const [apiStatus, setApiStatus] = useState("initial");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setApiStatus(apiConstants.loading);

    const response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    if (response.ok) {
      const fetchedData = await response.json();
      const extractedData = fetchedData.data.map((item) => ({
        Year: item.Year,
        Population: item.Population,
      }));

      const reversedData = extractedData.reverse();
      setPopulationData(reversedData);
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
    <div className="population-details-container">
      <h1 className="population-heading">
        Population Trends in the United States Over Time
      </h1>
      <PopulationCard data={populationData} />
      <p className="population-description">
        Explore the population trends of the United States over the past decade
        with this interactive graph. This graph visualizes the population data
        from 2013 to 2021, obtained from the United States Census Bureau. Each
        data point represents the population count for a specific year
      </p>
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

  return (
    <div className="population-main-container">
      <SideNavbar active="Population-Data" />
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
