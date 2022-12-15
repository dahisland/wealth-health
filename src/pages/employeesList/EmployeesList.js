import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import MainNav from "../../components/mainNav/MainNav";
import { useSelector, useDispatch } from "react-redux";
import { tableLabels } from "../../data/tableData";
import { filterArrayEmployeesData } from "./employeesList.functions";
import ListTable from "../../components/listTable/ListTable";
import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";
import { filterDataBySearch } from "./employeesList.functions";
import { employeesMockData } from "../../tests/dataMock.test";

const EmployeesList = () => {
  const { employeesList } = useSelector((state) => state.employees);
  // const employeesList = employeesMockData;
  const dispatch = useDispatch();

  const [tablePage, setTablePage] = useState(0);
  const [isOnSearch, setIsOnSearch] = useState(false);
  const [searchData, setSearchData] = useState([{}]);
  const [resultSearch, setResultSearch] = useState([]);
  const [employeesDataFiltered, setEmployeesDataFiltered] =
    useState(employeesList);

  useEffect(() => {
    filterArrayEmployeesData(
      tablePage,
      employeesList,
      setEmployeesDataFiltered,
      isOnSearch,
      resultSearch
    );
  }, [employeesList, tablePage, isOnSearch, resultSearch]);

  return (
    <div className="currentPage">
      <MainNav />
      <main>
        <h1>EMPLOYEES LIST</h1>
        <ListTable
          isOnSearch={isOnSearch}
          setIsOnSearch={setIsOnSearch}
          dispatch={dispatch}
          searchData={searchData}
          setSearchData={setSearchData}
          resultSearch={resultSearch}
          setResultSearch={setResultSearch}
          headLabels={tableLabels}
          dataList={employeesList}
          dataListFiltered={employeesDataFiltered}
          setDataListFiltered={setEmployeesDataFiltered}
          stateTablePage={tablePage}
          setTablePage={setTablePage}
        />
      </main>
      <Footer />
    </div>
  );
};

export default EmployeesList;
