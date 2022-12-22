import { getEmployeeList } from "../slides/employees.slice";
import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";

/**
 * Redux action to get and format data of new employee
 * @param {func} dispatch - Hook to update redux store
 * @param {array} mockData - Object containing data received by a call api
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
