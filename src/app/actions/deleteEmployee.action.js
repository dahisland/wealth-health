import { deleteEmployee } from "../slides/employees.slice";

/**
 * Redux action to delete data of new employee
 * @param {func} dispatch - Hook to update redux store
 * @param {object} employeeData - Object containing new employee data
 */

export function actionDeleteEmployee(
  dispatch,
  employeesDataList,
  employeeDataToDelete
) {
  const arrayModified = employeesDataList.filter(
    (item) => item !== employeeDataToDelete
  );
  dispatch(deleteEmployee(arrayModified));
}
