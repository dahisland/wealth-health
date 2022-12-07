import { addEmployee } from "../slides/employees.slice";

/**
 * Redux action to add data of new employee
 * @param {func} dispatch - Hook to update redux store
 * @param {object} employeeData - Object containing new employee data
 */
export function actionAddEmployee(dispatch, employeeData) {
  dispatch(addEmployee(employeeData));
}
