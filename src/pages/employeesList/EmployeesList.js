import React from "react";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";
import { useSelector, useDispatch } from "react-redux";
import { tableHeadLabels, tableBodyLabels } from "../../data/tableData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ListTableContext from "../../libraries/listTable/ListTableContext";
import ListTableHeader from "../../libraries/listTable/ListTableHeader";
import ListTableSearch from "../../libraries/listTable/ListTableSearch";
import ListTableBody from "../../libraries/listTable/ListTableBody";
import ListTableNav from "../../libraries/listTable/ListTableNav";
import ListTableShowSelect from "../../libraries/listTable/ListTableShowSelect";
import { actionDeleteEmployee } from "../../app/actions/deleteEmployee.action";
import { actionFilterEmployeeList } from "../../app/actions/filterEmployeeList.action";
import {
  actionSortAscending,
  actionSortDescending,
} from "../../app/actions/sortEmployeeList.action";

const EmployeesList = () => {
  const { employeesList, listFiltered } = useSelector(
    (state) => state.employees
  );
  const dispatch = useDispatch();

  const tableShowValues = [10, 25, 50, 100];

  function sortAscending(itemData) {
    actionSortAscending(dispatch, listFiltered, itemData);
  }

  function sortDescending(itemData) {
    actionSortDescending(dispatch, listFiltered, itemData);
  }

  function deleteOneEmployee(item) {
    actionDeleteEmployee(dispatch, employeesList, listFiltered, item);
  }

  function filterDataOnSearch(arrayWordsSearched) {
    actionFilterEmployeeList(dispatch, arrayWordsSearched, employeesList);
  }

  function noFilterDataOnSearch() {
    actionFilterEmployeeList(dispatch, [""], employeesList);
  }

  function formatDate(date) {
    const arrayDate = date.toLocaleDateString("en-US").split("/");
    const arrayDateFormatted = arrayDate.map((item) =>
      item < 10 ? "0" + item : item
    );
    return `${arrayDateFormatted[0]}/${arrayDateFormatted[1]}/${arrayDateFormatted[2]}`;
  }

  return (
    <div className="currentPage">
      <MainNav />
      <main className="pageList_main">
        <h1>EMPLOYEES LIST</h1>
        <ListTableContext
          //props for content Table
          dataFiltered={listFiltered}
          contentDeleteEntry="Delete this entry"
          contentSearchNotFound="No data employee has been found"
          formatDate={formatDate}
          tableBodyLabels={tableBodyLabels}
          // props for options table show
          tableShowValues={tableShowValues}
          // props to filter data with searchbar
          numberSearchOnActive={2}
          actionOnSearchActive={filterDataOnSearch}
          actionOnSearchInactive={noFilterDataOnSearch}
          // props to delete an item list
          actionDeleteListItem={deleteOneEmployee}
          // props for table head
          tableHeadLabels={tableHeadLabels}
          tableHeadLabelLeftIcon={
            <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon>
          }
          actionHeadLabelLeftIcon={sortAscending}
          tableHeadLabelRightIcon={
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          }
          actionHeadLabelRightIcon={sortDescending}
        >
          <ListTableSearch />
          <ListTableShowSelect />
          <ListTableHeader />
          <ListTableNav />
          <ListTableBody />
        </ListTableContext>
      </main>
      <Footer />
    </div>
  );
};

export default EmployeesList;
