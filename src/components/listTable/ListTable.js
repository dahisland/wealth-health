import React from "react";
import ListTableBody from "./ListTableBody";
import ListTableHeader from "./ListTableHeader";
import ListTableNav from "./ListTableNav";
import ListTableSearch from "./ListTableSearch";

const ListTable = (props) => {
  return (
    <div className="list-table">
      <ListTableSearch
        dataNotFiltered={props.dataNotFiltered}
        setTablePage={props.setTablePage}
        actionSearchFilter={props.actionSearchFilter}
        dispatch={props.dispatch}
      />
      <div className="listTable-wrapper">
        <ListTableHeader
          sortsLabels={props.sortsLabels}
          actionSortAscending={props.actionSortAscending}
          actionSortDescending={props.actionSortDescending}
          dataFiltered={props.dataFiltered}
          dispatch={props.dispatch}
        />
        <ListTableNav
          stateTablePage={props.stateTablePage}
          setTablePage={props.setTablePage}
          dataFiltered={props.dataFiltered}
        />
        <ListTableBody
          dispatch={props.dispatch}
          dataFiltered={props.dataFiltered}
          dataNotFiltered={props.dataNotFiltered}
          stateTablePage={props.stateTablePage}
          actionDeleteListItem={props.actionDeleteListItem}
        />
      </div>
    </div>
  );
};

export default ListTable;
