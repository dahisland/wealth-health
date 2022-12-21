import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const tableListContext = createContext();

const ListTableContext = (props) => {
  const [tablePage, setTablePage] = useState(0);
  return (
    <tableListContext.Provider
      value={{
        dataFiltered: props.dataFiltered,
        stateTablePage: tablePage,
        setTablePage: setTablePage,
        numberSearchOnActive: props.numberSearchOnActive,
        actionOnSearchActive: props.actionOnSearchActive,
        actionOnSearchInactive: props.actionOnSearchInactive,
        actionDeleteListItem: props.actionDeleteListItem,
        tableHeadLabels: props.tableHeadLabels,
        actionSortAscending: props.actionSortAscending,
        actionSortDescending: props.actionSortDescending,
      }}
    >
      <div className="list-table">
        <div className="listTable-wrapper">{props.children}</div>
      </div>
    </tableListContext.Provider>
  );
};

ListTableContext.propTypes = {
  dataFiltered: PropTypes.array,
  tableHeadLabels: PropTypes.array,
  numberSearchOnActive: PropTypes.number,
  actionSortAscending: PropTypes.func,
  actionSortDescending: PropTypes.func,
  actionDeleteListItem: PropTypes.func,
  actionOnSearchActive: PropTypes.func,
  actionOnSearchInactive: PropTypes.func,
};

export default ListTableContext;
