import React from "react";
import "../Header/header.css";
import { FaBars } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

export const Header = () => {
  return (
    <nav className="Header-container flex-center ">
      <div className="header-left-logo flex-center mrl">
        <span className="symbol">C</span>
        <p className="title">Crypto Tracker</p>
      </div>

      <div className="header-left-logo flex-center mrl">
        <BsSearch className="header-icon search-icon" />
        <FaBars className="header-icon bar-icon" />
      </div>
    </nav>
  );
};
