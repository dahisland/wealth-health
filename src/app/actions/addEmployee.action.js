import { addEmployee } from "../slides/employees.slice";

/**
 * Redux action to add data of new employee
 * @param {func} dispatch - Hook to update redux store
 * @param {object} employeeDataItem - Object containing new employee data item
 */
export function actionAddEmployee(dispatch, employeeDataItem) {
  dispatch(addEmployee(employeeDataItem));
}
