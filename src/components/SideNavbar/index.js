import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import { FiAlignJustify } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";

import "./index.css";

const navItemsList = [
  { name: "Home", path: "/" },
  { name: "Population-Data", path: "/population-data" },
  { name: "Crypto-Currency", path: "/crypto-currency" },
];

const SideNavbar = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onSetSidebarOpen = (open) => {
    setSidebarOpen(open);
  };

  const renderNavItems = (screenSize) => (
    <div className="sidebar-main-container">
      <div className="btn-and-logo-container">
        {screenSize === "sm" && (
          <button
            type="button"
            className="sidebar-close-btn"
            onClick={() => onSetSidebarOpen(false)}
          >
            {" "}
            <FaWindowClose size={30} color=" #fee715ff" />
          </button>
        )}

        {screenSize !== "sm" && (
          <button className="hamburger-btn">
            {" "}
            <FiAlignJustify size={30} color=" #fee715ff" />
          </button>
        )}
        <img
          src="https://www.clker.com/cliparts/s/c/4/G/5/D/earth-yellow-md.png"
          className="logo-img"
          alt="logo"
        />
      </div>
      <ul className="nav-items-container">
        {navItemsList.map((each) => (
          <li
            className={`${
              active === each.name ? "nav-item active-nav-item" : "nav-item"
            }`}
          >
            {" "}
            <Link
              className={`${
                active === each.name
                  ? "link-item active-link-item"
                  : "link-item"
              }`}
              to={each.path}
            >
              {each.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const { active } = props;

  return (
    <div className="sidebar-container">
      <div className="sm-nav-container">
        <Sidebar
          sidebar={renderNavItems("sm")}
          open={sidebarOpen}
          onSetOpen={onSetSidebarOpen}
          styles={{
            sidebar: {
              backgroundColor: " #101820ff",
              width: "80%",
            },
          }}
        >
          <button
            className="hamburger-btn"
            onClick={() => onSetSidebarOpen(true)}
          >
            {" "}
            <FiAlignJustify size={30} color="#101820ff" />
          </button>
        </Sidebar>
      </div>
      <div className="lg-nav-container">{renderNavItems()}</div>
    </div>
  );
};

export default SideNavbar;
