import { getEmployeeList } from "../slides/employees.slice";
import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";

/**
 * Redux action to add data of new employee
 * @param {func} dispatch - Hook to update redux store
 * @param {object} employeeDataItem - Object containing new employee data item
 */
export function actionGetEmployeeList(dispatch, mockData) {
  const arrayDataFormatted = [];
  mockData.forEach((data) => {
    const dataToFormate = new modelNewEmployeeData(data);
    const dataFormatted = dataToFormate.formatForDisplay();
    arrayDataFormatted.push(dataFormatted);
  });
  console.log(arrayDataFormatted);
  dispatch(getEmployeeList(arrayDataFormatted));
}
