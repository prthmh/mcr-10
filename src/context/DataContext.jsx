import { createContext, useContext, useReducer } from "react";
import { inventoryData } from "../data";
import { dataReducer } from "../reducer";
import { getTotStock } from "../utils/getTotStock";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const initialState = {
    items: inventoryData,
    filters: {
      sortType: "",
      departmentType: "all",
      lowStock: false,
      propertyType: "name",
    },
  };
  const [dataState, dataDispatch] = useReducer(dataReducer, initialState);
  // console.log(dataState);
  const { sortType, departmentType, lowStock, propertyType } =
    dataState.filters;
  console.log(sortType, departmentType, lowStock, propertyType);

  const getSortedList = (data) => {
    let tempData = data;
    if (sortType === "department") {
      if (departmentType !== "all") {
        tempData = [...data].filter(
          (item) => item.department === departmentType
        );
      } else {
        tempData = data;
      }
    }

    if (sortType === "property") {
      if (propertyType === "name") {
        tempData = [...data].sort((a, b) => a.name.localeCompare(b.name));
      } else {
        tempData = [...data].sort((a, b) => a[propertyType] - b[propertyType]);
      }
    }

    if (sortType === "stock") {
      if (lowStock) {
        tempData = data.reduce(
          (acc, curr) => (curr.stock <= 10 ? [...acc, curr] : acc),
          []
        );
      }
    }

    return tempData;
  };

  return (
    <DataContext.Provider value={{ dataState, dataDispatch, getSortedList }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
