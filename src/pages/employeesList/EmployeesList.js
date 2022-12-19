import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";
import { useSelector, useDispatch } from "react-redux";
import { tableLabels } from "../../data/tableData";
import ListTable from "../../components/listTable/ListTable";
import { actionFilterEmployeeList } from "../../app/actions/filterEmployeeList.action";
import {
  actionSortAscending,
  actionSortDescending,
} from "../../app/actions/sortEmployeeList.action";
import { actionDeleteEmployee } from "../../app/actions/deleteEmployee.action";

const EmployeesList = () => {
  const { employeesList, listFiltered } = useSelector(
    (state) => state.employees
  );
  const dispatch = useDispatch();
  const [tablePage, setTablePage] = useState(0);

  return (
    <div className="currentPage">
      <MainNav />
      <main>
        <h1>EMPLOYEES LIST</h1>
        <ListTable
          dispatch={dispatch}
          dataFiltered={listFiltered}
          dataNotFiltered={employeesList}
          // props for state display limited items data by page
          stateTablePage={tablePage}
          setTablePage={setTablePage}
          // props to filter data with searchbar
          actionSearchFilter={actionFilterEmployeeList}
          // props to delete an item list
          actionDeleteListItem={actionDeleteEmployee}
          // props for sorts header
          sortsLabels={tableLabels}
          actionSortAscending={actionSortAscending}
          actionSortDescending={actionSortDescending}
        />
      </main>
      <Footer />
    </div>
  );
};

export default EmployeesList;
