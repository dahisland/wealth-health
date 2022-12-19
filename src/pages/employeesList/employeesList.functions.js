import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";

export function getDataDisplayedByPage(stateTablePage, dataFiltered) {
  const minIndex = stateTablePage * 10 - 1;
  const maxIndex = (stateTablePage + 1) * 10;
  return dataFiltered.filter(
    (item) =>
      minIndex < dataFiltered.indexOf(item) &&
      dataFiltered.indexOf(item) < maxIndex
  );
}

export function getDataFiltered(
  employeesData,
  arrayResearch,
  setDataFiltered,
  refSortBy
) {
  // Algorithm to filter data by using searchbar
  function normalizeText(txt) {
    let normalizedText = txt
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[:',.()!?;"/]/g, " ")
      .replace(/[\s]{2,}/g, " ")
      .toLowerCase();
    return normalizedText;
  }

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

  if (refSortBy.sortBy !== "") {
    if (refSortBy.sortBy === "ascending") {
      // Display data by ascending sort
      setDataFiltered(
        dataFilteredBySearch.sort(function compare(a, b) {
          if (a[refSortBy.keyRef] < b[refSortBy.keyRef]) return -1;
          if (a[refSortBy.keyRef] > b[refSortBy.keyRef]) return 1;
          return 0;
        })
      );
    } else {
      // Display data by descending sort
      setDataFiltered(
        dataFilteredBySearch.sort(function compare(a, b) {
          if (a[refSortBy.keyRef] < b[refSortBy.keyRef]) return 1;
          if (a[refSortBy.keyRef] > b[refSortBy.keyRef]) return -1;
          return 0;
        })
      );
    }
  } else {
    // Display data filtered by searchbar without sort
    setDataFiltered(dataFilteredBySearch);
  }
}

//
// export function formatArrayEmployeesData(array) {
//   const newArray = array.map(
//     (item) => (item = new modelNewEmployeeData(item).formatForSearch())
//   );
//   return newArray;
// }
