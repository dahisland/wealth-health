import {
  sortAscendingEmployeeList,
  sortDescendingEmployeeList,
} from "../slides/employees.slice";

/**
 * Redux action to display data by ascending sort
 * @param {func} dispatch - Hook to update redux store
 * @param {array} dataToSort - Array containing data to sort
 * @param {string} refSortBy - a string referring to the key's object value to compare
 */
export function actionSortAscending(dispatch, dataToSort, refSortBy) {
  const copyData = [...dataToSort];
  dispatch(
    sortAscendingEmployeeList(
      copyData.sort(function compare(a, b) {
        if (a[refSortBy.keyRef] < b[refSortBy.keyRef]) return -1;
        if (a[refSortBy.keyRef] > b[refSortBy.keyRef]) return 1;
        return 0;
      })
    )
  );
}

/**
 * Redux action to display data by descending sort
 * @param {func} dispatch - Hook to update redux store
 * @param {array} dataToSort - Array containing data to sort
 * @param {string} refSortBy - a string referring to the key's object value to compare
 */
export function actionSortDescending(dispatch, dataToSort, refSortBy) {
  const copyData = [...dataToSort];
  dispatch(
    sortDescendingEmployeeList(
      copyData.sort(function compare(a, b) {
        if (a[refSortBy.keyRef] < b[refSortBy.keyRef]) return 1;
        if (a[refSortBy.keyRef] > b[refSortBy.keyRef]) return -1;
        return 0;
      })
    )
  );
}
