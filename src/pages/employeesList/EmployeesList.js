import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";
import { useSelector, useDispatch } from "react-redux";
import { tableLabels } from "../../data/tableData";
import ListTable from "../../components/listTable/ListTable";
import {
  filterArrayEmployeesData,
  formatArrayEmployeesData,
} from "./employeesList.functions";
import { employeesMockData } from "../../tests/dataMock.test";

const EmployeesList = () => {
  const { employeesList } = useSelector((state) => state.employees);
  // const employeesList = formatArrayEmployeesData(employeesMockData);
  const dispatch = useDispatch();
  const [tablePage, setTablePage] = useState(0);
  const [dataOnPageActive, setDataOnPageActive] = useState([]);
  const [dataFiltered, setDataFiltered] = useState(employeesList);

  useEffect(() => {
    filterArrayEmployeesData(tablePage, dataFiltered, setDataOnPageActive);
  }, [dataFiltered, tablePage]);

  console.log(employeesList);
  return (
    <div className="currentPage">
      <MainNav />
      <main>
        <h1>EMPLOYEES LIST</h1>
        <ListTable
          dispatch={dispatch}
          dataList={employeesList}
          dataOnPageActive={dataOnPageActive}
          setDataOnPageActive={setDataOnPageActive}
          dataFiltered={dataFiltered}
          setDataFiltered={setDataFiltered}
          headLabels={tableLabels}
          stateTablePage={tablePage}
          setTablePage={setTablePage}
        />
      </main>
      <Footer />
    </div>
  );
};

export default EmployeesList;
