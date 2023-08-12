import React from "react";
import "./DepartmentsPage.css";
import { useData } from "../../context/DataContext";
import { NavLink } from "react-router-dom";

const DepartmentsPage = () => {
  const {
    dataState: { items },
    dataDispatch,
  } = useData();
  const departments = items.reduce(
    (acc, curr) =>
      acc.includes(curr.department) ? acc : [...acc, curr.department],
    []
  );
  const handleClick = (dept) => {
    console.log(dept);
    dataDispatch({ type: "DEPARTMENT_CHANGE", payload: dept });
  };
  return (
    <div className="departments">
      {departments.map((dept, i) => (
        <div key={i} onClick={() => handleClick(dept)}>
          <NavLink to="/productList">{dept}</NavLink>
          </div>
      ))}
    </div>
  );
};

export default DepartmentsPage;
