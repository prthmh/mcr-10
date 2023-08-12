export const dataReducer = (dataState, { type, payload }) => {
  switch (type) {
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
    default:
      break;
  }
  return dataState;
};
