import { deleteEmployee } from "../slides/employees.slice";

/**
 * Redux action to delete data of new employee
 * @param {func} dispatch - Hook to update redux store
 * @param {array} employeesData - Array containing employees data list
 * @param {object} employeeDataToDelete - Object employee data item to delete
 */
export function actionDeleteEmployee(
  dispatch,
  employeesData,
  employeeDataToDelete
) {
  const arrayModified = employeesData.filter(
    (obj) => obj !== employeeDataToDelete
  );
  console.log(employeeDataToDelete);
  console.log(arrayModified);
  dispatch(deleteEmployee(arrayModified));
}
