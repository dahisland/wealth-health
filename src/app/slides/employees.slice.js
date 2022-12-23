import { createSlice } from "@reduxjs/toolkit";
import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";
import { mockData } from "../../data/mockData";

// Initial data used until backend is implemented
// After, it will be replaced by calls api in a useEffect and initState will be an empty array
const initialData = mockData.map(
  (item) => (item = new modelNewEmployeeData(item).formatForDisplay())
);

/**
 * Redux slice containing reducers for employees list
 */
export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    employeesList: initialData,
    listFiltered: initialData,
  },
  reducers: {
    getEmployeeList: (state, action) => {
      state.employeesList = [...state.employeesList].concat(action.payload);
      state.listFiltered = [...state.employeesList];
    },
    addEmployee: (state, action) => {
      state.employeesList = [...state.employeesList, action.payload];
      state.listFiltered = [...state.employeesList];
    },
    deleteEmployee: (state, action) => {
      state.employeesList = action.payload.dataUpdated;
      state.listFiltered = action.payload.dataFilteredUpdated;
    },
    filterEmployeeList: (state, action) => {
      state.listFiltered = action.payload;
    },
    sortAscendingEmployeeList: (state, action) => {
      state.listFiltered = action.payload;
    },
    sortDescendingEmployeeList: (state, action) => {
      state.listFiltered = action.payload;
    },
  },
});

export const {
  getEmployeeList,
  addEmployee,
  deleteEmployee,
  filterEmployeeList,
  sortAscendingEmployeeList,
  sortDescendingEmployeeList,
} = employeesSlice.actions;
export default employeesSlice.reducer;
