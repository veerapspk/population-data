import Modal from "react-modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import { FiAlignJustify } from "react-icons/fi";

import "./index.css";

const SideNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };
  const renderNavItems = (screenSize) => (
    <>
      {screenSize === "sm" && (
        <button onClick={() => onSetSidebarOpen(false)}>
          {" "}
          <FiAlignJustify size={30} color="green" />
        </button>
      )}
      <ul className="nav-items-container">
        <li
          className={`${
            active === "home" ? "nav-item active-nav-item" : "nav-item"
          }`}
        >
          {" "}
          <Link
            className={`${
              active === "home" ? "link-item active-link-item" : "link-item"
            }`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li
          className={`${
            active === "about" ? "nav-item active-nav-item" : "nav-item"
          }`}
        >
          {" "}
          <Link
            className={`${
              active === "about" ? "link-item active-link-item" : "link-item"
            }`}
            to="/about"
          >
            About
          </Link>
        </li>
        <li
          className={`${
            active === "population" ? "nav-item active-nav-item" : "nav-item"
          }`}
        >
          {" "}
          <Link
            className={`${
              active === "population"
                ? "link-item active-link-item"
                : "link-item"
            }`}
            to="/population-data"
          >
            Population
          </Link>
        </li>
        <li
          className={`${
            active === "crypto" ? "nav-item active-nav-item" : "nav-item"
          }`}
        >
          {" "}
          <Link
            className={`${
              active === "crypto" ? "link-item active-link-item" : "link-item"
            }`}
            to="/crypto-currency"
          >
            crypto currency
          </Link>
        </li>
      </ul>
    </>
  );

  const active = "about";

  return (
    <>
      <div className="sm-nav-container">
        <Sidebar
          sidebar={renderNavItems("sm")}
          open={sidebarOpen}
          onSetOpen={onSetSidebarOpen}
          styles={{ sidebar: { backgroundColor: "black", width: "80%" } }}
        >
          <button onClick={() => onSetSidebarOpen(true)}>
            {" "}
            <FiAlignJustify size={30} color="green" />
          </button>
        </Sidebar>
      </div>
      <div className="lg-nav-container">{renderNavItems()}</div>
    </>
  );
};

export default SideNavbar;
/* <div>
    
  </div>*/
