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
        setTablePage={props.setTablePage}
        dataFiltered={props.dataFiltered}
        setDataFiltered={props.setDataFiltered}
      />
      <div className="listTable-wrapper">
        <ListTableHeader
          headLabels={props.headLabels}
          dataFiltered={props.dataFiltered}
          setDataFiltered={props.setDataFiltered}
        />
        <ListTableNav
          stateTablePage={props.stateTablePage}
          setTablePage={props.setTablePage}
          dataFiltered={props.dataFiltered}
          setDataFiltered={props.setDataFiltered}
        />
        <ListTableBody dataOnPageActive={props.dataOnPageActive} />
      </div>
    </div>
  );
};

export default ListTable;
