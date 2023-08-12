import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const isNavActive = ({ isActive }) => ({ color: isActive && "white" });
  return (
    <div className="sidebar">
      <NavLink to="/" className="nav_element" style={isNavActive}>
        Dashboard
      </NavLink>
      <NavLink to="/departments" className="nav_element" style={isNavActive}>
        Departments
      </NavLink>
      <NavLink to="/productList" className="nav_element" style={isNavActive}>
        Products
      </NavLink>
    </div>
  );
};

export default SideBar;
