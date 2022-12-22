import { filterEmployeeList } from "../slides/employees.slice";
import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";

/**
 * Redux action to filter data on search
 * @param {func} dispatch - Hook to update redux store
 * @param {array} arrayResearch - Array containing words searched for filter data
 * @param {array} employeesData - Array containing employees data list to filter
 */
export function actionFilterEmployeeList(
  dispatch,
  arrayResearch,
  employeesData
) {
  // function to format each data element to compare with array of words search data
  function normalizeText(txt) {
    let normalizedText = txt
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[:',.()!?;"/]/g, " ")
      .replace(/[\s]{2,}/g, " ")
      .toLowerCase();
    return normalizedText;
  }

  // Algoritm to return data filtered by the search data received
  const filterEmployeesList = (obj) => {
    const itemFormatted = new modelNewEmployeeData(obj);
    const itemContent = Object.values(itemFormatted.formatForSearch());
    const itemContentFormatted = normalizeText(itemContent.toString());
    const testEachSearchWord = (item) => {
      return itemContentFormatted.match(item);
    };
    return arrayResearch.every(testEachSearchWord);
  };

  const dataFilteredBySearch = employeesData.filter(filterEmployeesList);

  dispatch(filterEmployeeList(dataFilteredBySearch));
}
