import { createContext, useContext, useEffect, useReducer } from "react";
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

  useEffect(() => {
    const stateInStorage = JSON.parse(localStorage.getItem("mcr10"));
    if (stateInStorage) {
      dataDispatch({ type: "SET_STATE", payload: stateInStorage });
    } else {
      dataDispatch({ type: "SET_STATE", payload: dataState });
    }
  }, []);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch, getSortedList }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
