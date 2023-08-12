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
    <div>
      <p>Total Stock: {getTotStock(items)}</p>
      <p>Total Delivered: {getTotDelivered(items)}</p>
      <p>Low Stock: {getLowStock(items)}</p>
    </div>
  );
};

export default InventoryPage;
