import SideNavbar from "../SideNavbar";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

const Home = () => (
  <div className="population-main-container">
    <SideNavbar active="Home" />
    <div className="population-container">
      <div className="population-nav-section">
        <Navbar />
      </div>
      <div className="home-container">
        <h1 className="main-head">Data Visualizer</h1>
        <p className="main-description">
          Data Visualizer is a data visualization platform designed to provide
          users with valuable insights through interactive graphs and charts.
          Upon logging in, users are greeted with a personalized home page,
          offering a seamless experience to explore and analyze various
          datasets.
        </p>

        <h2>Population Trends Graphs: </h2>
        <p className="para">
          Dive into comprehensive population data with insightful graphs,
          including trends for nations like the USA.
        </p>

        <h2>Real-Time Cryptocurrency Prices: </h2>
        <p className="para">
          Stay informed about cryptocurrency market trends with real-time
          updates on prices, including Bitcoin, in multiple currencies.{" "}
        </p>

        <h2>Quick Access Links: </h2>
        <p className="para">
          {" "}
          Easily navigate to different sections of the app with quick access
          links, ensuring efficient exploration of data and tasks.
        </p>

        <h1 className="bottom-head">Why Choose Data Visualization?</h1>
        <p className="bottom-para">
          Data Visualization empowers users to gain valuable insights from data
          effortlessly. With its intuitive interface and comprehensive features,
          Data Visualization is your go-to platform for data exploration and
          analysis.
        </p>
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;
