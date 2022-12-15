import React from "react";
import ListTableBody from "./ListTableBody";
import ListTableHeader from "./ListTableHeader";
import ListTableNav from "./ListTableNav";
import ListTableSearch from "./ListTableSearch";

const ListTable = (props) => {
  return (
    <div className="list-table">
      <ListTableSearch
        dataList={props.dataList}
        setIsOnSearch={props.setIsOnSearch}
        setResultSearch={props.setResultSearch}
        searchData={props.searchData}
        setSearchData={props.setSearchData}
        setTablePage={props.setTablePage}
      />
      <div className="listTable-wrapper">
        <ListTableHeader
          isOnSearch={props.isOnSearch}
          resultSearch={props.resultSearch}
          setResultSearch={props.setResultSearch}
          headLabels={props.headLabels}
          dataList={props.dataList}
          dataListFiltered={props.dataListFiltered}
          setDataListFiltered={props.setDataListFiltered}
        />
        <ListTableNav
          isOnSearch={props.isOnSearch}
          resultSearch={props.resultSearch}
          stateTablePage={props.stateTablePage}
          setTablePage={props.setTablePage}
          dataList={props.dataList}
        />
        <ListTableBody
          dataListFiltered={props.dataListFiltered}
          dataList={props.dataList}
          dispatch={props.dispatch}
          isOnSearch={props.isOnSearch}
          resultSearch={props.resultSearch}
          searchData={props.searchData}
        />
      </div>
    </div>
  );
};

export default ListTable;
