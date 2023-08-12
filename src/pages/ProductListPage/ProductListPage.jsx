import React, { useEffect, useState } from "react";
import "./ProductListPage.css";
import FilterSection from "../../components/FilterSection/FilterSection";
import { useData } from "../../context/DataContext";

const ProductListPage = () => {
  const {
    dataState: { items, filters },
    getSortedList,
  } = useData();
  const [output, setOutput] = useState(items);
  useEffect(() => {
    setOutput(getSortedList(items));
  }, [filters]);
  return (
    <div>
      <FilterSection />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Supplier</th>
          </tr>
        </thead>
        <tbody>
          {output.map((prod) => (
            <tr className="prod" key={prod.id}>
              <td>{prod.name}</td>
              <td>{prod.description}</td>
              <td>{prod.price}</td>
              <td>{prod.stock}</td>
              <td>{prod.supplier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListPage;
