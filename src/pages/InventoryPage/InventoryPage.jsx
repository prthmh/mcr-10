import React from "react";
import "./InventoryPage.css";
import { useData } from "../../context/DataContext";
import { getTotStock } from "../../utils/getTotStock";
import { getTotDelivered } from "../../utils/getTotDelivered";
import { getLowStock } from "../../utils/getLowStock";

const InventoryPage = () => {
  const {
    dataState: { items },
  } = useData();
  console.log(items);
  return (
    <div className="inventroy">
      <div className="inventory_item" >
        <span style={{ color: "green" }}>{getTotStock(items)}</span>
        <p>Total Stock</p>
      </div>
      <div className="inventory_item">
        <span style={{ color: "orange" }}>{getTotDelivered(items)}</span>
        <p>Total Delivered</p>
      </div>
      <div className="inventory_item">
        <span style={{ color: "red" }}>{getLowStock(items)}</span>
        <p>Low Stock</p>
      </div>
    </div>
  );
};

export default InventoryPage;
