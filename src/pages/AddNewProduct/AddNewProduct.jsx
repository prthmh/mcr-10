import React, { useState } from "react";
import "./AddNewProduct.css";
import { useData } from "../../context/DataContext";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AddNewProduct = () => {
  const {
    dataState: { items },
    dataDispatch,
  } = useData();
  const [formData, setFormData] = useState({
    id: items.length + 1,
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl: "",
  });
  const handleChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dataDispatch({ type: "ADD_PRODUCT", payload: formData });
    toast("New Product Added! Go to Product page to view", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setFormData({
      id: items.length + 1,
      department: "",
      name: "",
      description: "",
      price: 0,
      stock: 0,
      sku: "",
      supplier: "",
      delivered: 0,
      imageUrl: "",
    });
  };

  return (
    <div>
      <ToastContainer />
      <h2>Add New Product</h2>
      <form className="new_prod_form" onSubmit={handleSubmit}>
        <label className="form_label">
          Department
          <select
            style={{ fontFamily: "inherit" }}
            className="form_input"
            name="department"
            onChange={handleChange}
          >
            <option></option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </label>
        <label className="form_label">
          Name
          <input
            type="text"
            className="form_input"
            name="name"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Description
          <textarea
            className="form_input"
            name="description"
            onChange={handleChange}
          ></textarea>
        </label>
        <label className="form_label">
          Stock
          <input
            type="number"
            className="form_input"
            name="stock"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Price
          <input
            type="number"
            className="form_input"
            name="price"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          SKU
          <input
            type="text"
            className="form_input"
            name="sku"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Delivered
          <input
            type="number"
            className="form_input"
            name="delivered"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Supplier
          <input
            type="text"
            className="form_input"
            name="supplier"
            onChange={handleChange}
          />
        </label>
        <label className="form_label">
          Image URL
          <input
            type="text"
            className="form_input"
            name="imageUrl"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="add_button">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
