import React, { useEffect } from "react";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";
import { useSelector, useDispatch } from "react-redux";
import { mockData } from "../../data/mockData";
import { tableHeadLabels, tableBodyLabels } from "../../data/tableData";
import ListTableContext from "../../components/listTable/ListTableContext";
import ListTableHeader from "../../components/listTable/ListTableHeader";
import ListTableSearch from "../../components/listTable/ListTableSearch";
import ListTableBody from "../../components/listTable/ListTableBody";
import ListTableNav from "../../components/listTable/ListTableNav";
import { actionGetEmployeeList } from "../../app/actions/getEmployeeList.action";
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

  // useEffect(() => {
  //   actionGetEmployeeList(dispatch, mockData);
  // }, [mockData]);

  function sortAscending(itemData) {
    actionSortAscending(dispatch, listFiltered, itemData);
  }

  function sortDescending(itemData) {
    actionSortDescending(dispatch, listFiltered, itemData);
  }

  function deleteOneEmployee(item) {
    actionDeleteEmployee(dispatch, employeesList, item);
  }

  function filterDataOnSearch(arrayWordsSearched) {
    actionFilterEmployeeList(dispatch, arrayWordsSearched, employeesList);
  }

  function noFilterDataOnSearch() {
    actionFilterEmployeeList(dispatch, [""], employeesList);
  }

  return (
    <div className="currentPage">
      <MainNav />
      <main>
        <h1>EMPLOYEES LIST</h1>
        <ListTableContext
          //props for content Table
          dataFiltered={listFiltered}
          contentDeleteEntry="Delete this entry"
          contentSearchNotFound="No data employee has been found"
          // props to filter data with searchbar
          numberSearchOnActive={2}
          actionOnSearchActive={filterDataOnSearch}
          actionOnSearchInactive={noFilterDataOnSearch}
          // props to delete an item list
          actionDeleteListItem={deleteOneEmployee}
          // props for sorts header
          tableHeadLabels={tableHeadLabels}
          tableBodyLabels={tableBodyLabels}
          actionSortAscending={sortAscending}
          actionSortDescending={sortDescending}
        >
          <ListTableSearch />
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
