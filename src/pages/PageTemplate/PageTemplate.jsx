import React from "react";
import "./PageTemplate.css";
import SideBar from "../../components/SideBar/SideBar";

const PageTemplate = ({ children }) => {
  return (
    <div className="page_template">
      <div className="nav_section">
        <SideBar />
      </div>
      <div className="children">{children}</div>
    </div>
  );
};

export default PageTemplate;
