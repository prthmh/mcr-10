import React from "react";
import "./FilterSection.css";
import { useData } from "../../context/DataContext";

const FilterSection = () => {
  const { dataDispatch } = useData();
  const handleDepartmentChange = (e) => {
    dataDispatch({ type: "DEPARTMENT_CHANGE", payload: e.target.value });
  };

  const handlePropertySort = (e) => {
    dataDispatch({ type: "PROPERTY_CHANGE", payload: e.target.value });
  };

  const handleLowStock = () => {
    dataDispatch({ type: "LOW_STOCK" });
  };

  return (
    <div className="filters">
      <h2>Products</h2>
      <select onChange={handleDepartmentChange}>
        <option value="all">All Departments</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>
      <label>
        <input type="checkbox" onChange={handleLowStock} />
        Low Stock
      </label>
      <select onChange={handlePropertySort}>
        <option></option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>
    </div>
  );
};

export default FilterSection;
