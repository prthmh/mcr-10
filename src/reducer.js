export const dataReducer = (dataState, { type, payload }) => {
  switch (type) {
    case "SET_STATE":
      dataState = payload;
      break;
    case "DEPARTMENT_CHANGE":
      dataState = {
        ...dataState,
        filters: {
          ...dataState.filters,
          sortType: "department",
          departmentType: payload,
        },
      };
      break;
    case "PROPERTY_CHANGE":
      dataState = {
        ...dataState,
        filters: {
          ...dataState.filters,
          sortType: "property",
          propertyType: payload,
        },
      };
      break;
    case "LOW_STOCK":
      dataState = {
        ...dataState,
        filters: {
          ...dataState.filters,
          sortType: "stock",
          lowStock: !dataState.filters.lowStock,
        },
      };
      break;
    case "ADD_PRODUCT":
      dataState = { ...dataState, items: [...dataState.items, payload] };
      break;
    default:
      break;
  }

  localStorage.setItem("mcr10", JSON.stringify(dataState));
  return dataState;
};
