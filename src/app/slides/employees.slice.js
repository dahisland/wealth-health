import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice containing reducers for employees list
 */
export const employeesSlice = createSlice({
  name: "employees",
  initialState: { employeesList: [], listFiltered: [] },
  reducers: {
    addEmployee: (state, action) => {
      state.employeesList = [...state.employeesList, action.payload];
      state.listFiltered = [...state.employeesList];
    },
    deleteEmployee: (state, action) => {
      state.employeesList = action.payload;
      state.listFiltered = [...state.employeesList];
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
  addEmployee,
  deleteEmployee,
  filterEmployeeList,
  sortAscendingEmployeeList,
  sortDescendingEmployeeList,
} = employeesSlice.actions;
export default employeesSlice.reducer;
