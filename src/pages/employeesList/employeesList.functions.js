import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";

export function filterArrayEmployeesData(
  stateTablePage,
  dataFiltered,
  setDataOnPageActive
) {
  const minIndex = stateTablePage * 10 - 1;
  const maxIndex = (stateTablePage + 1) * 10;
  const dataToDisplay = dataFiltered.filter(
    (item) =>
      minIndex < dataFiltered.indexOf(item) &&
      dataFiltered.indexOf(item) < maxIndex
  );
  setDataOnPageActive(dataToDisplay);
  return dataToDisplay;
}

export function formatArrayEmployeesData(array) {
  const newArray = array.map(
    (item) => (item = new modelNewEmployeeData(item).formatForSearch())
  );
  return newArray;
}
