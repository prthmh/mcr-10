import React, { useEffect, useState } from "react";
import "./ProductListPage.css";
import FilterSection from "../../components/FilterSection/FilterSection";
import { useData } from "../../context/DataContext";

const ProductListPage = () => {
  const {
    dataState: { items, filters },
    getSortedList,
  } = useData();
  // const [output, setOutput] = useState();
  // useEffect(() => {
  //   setOutput(getSortedList(items));
  // }, [filters]);
  const output = getSortedList(items);

  return (
    <div>
      <FilterSection />
      <table>
        <thead>
          <tr>
            <th>Image</th>
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
              <td>
                <img src={prod.imageUrl} alt={prod.name} className="prod_img"/>
              </td>
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
