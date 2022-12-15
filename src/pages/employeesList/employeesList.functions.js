import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";

export function filterArrayEmployeesData(
  stateTablePage,
  arrayEmployeesList,
  setEmployeesDataFiltered,
  iSOnSearch,
  resultSearch
) {
  const minIndex = stateTablePage * 10 - 1;
  const maxIndex = (stateTablePage + 1) * 10;
  if (iSOnSearch) {
    const arrayFiltered = resultSearch.filter(
      (item) =>
        minIndex < resultSearch.indexOf(item) &&
        resultSearch.indexOf(item) < maxIndex
    );
    setEmployeesDataFiltered(arrayFiltered);
  } else {
    const arrayFiltered = arrayEmployeesList.filter(
      (item) =>
        minIndex < arrayEmployeesList.indexOf(item) &&
        arrayEmployeesList.indexOf(item) < maxIndex
    );
    setEmployeesDataFiltered(arrayFiltered);
  }
}

function normalizeText(txt) {
  let normalizedText = txt
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[:',.()!?;"/]/g, " ")
    .replace(/[\s]{2,}/g, " ")
    .toLowerCase();
  return normalizedText;
}

function getSearchWords(e, setSearchData) {
  let normalizeSearchUser = normalizeText(e.target.value).trim();
  let regexWord = /([0-9a-z]{1,} ?)/g;
  const arrayInputSearchBar = normalizeSearchUser.match(regexWord);
  if (arrayInputSearchBar !== null) {
    setSearchData(arrayInputSearchBar);
  }
}

export function filterDataBySearch(
  e,
  employeesData,
  setIsOnSearch,
  searchData,
  setResultSearch,
  setSearchData,
  setTablePage
) {
  const inputValue = e.target.value;
  getSearchWords(e, setSearchData);
  // setResultSearch([]);
  console.log(searchData);

  if (inputValue.length >= 2) {
    //callback function
    const filterRecipes = (obj) => {
      const itemFormatted = new modelNewEmployeeData(obj);
      const itemContent = Object.values(itemFormatted.formatForSearch());
      const itemContentFormatted = normalizeText(itemContent.toString());
      const testEachSearchWord = (item) => {
        return itemContentFormatted.match(item);
      };
      return searchData.every(testEachSearchWord);
    };
    let arrayFiltered = employeesData.filter(filterRecipes);
    setResultSearch(arrayFiltered);
    setIsOnSearch(true);
    setTablePage(0);
  } else {
    setIsOnSearch(false);
    setTablePage(0);
    setResultSearch([]);
  }
}
