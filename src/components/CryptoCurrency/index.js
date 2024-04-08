import SideNavbar from "../SideNavbar";
<SideNavbar />;

const CryptoCurrency = () => (
  <div className="home-main-container">
    <SideNavbar active="crypto" />
    <div className="home-details-container">
      <h1>Crypto container</h1>
    </div>
  </div>
);

export default CryptoCurrency;
