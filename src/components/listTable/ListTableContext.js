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
        formatDate: props.formatDate,
        actionOnSearchActive: props.actionOnSearchActive,
        actionOnSearchInactive: props.actionOnSearchInactive,
        actionDeleteListItem: props.actionDeleteListItem,
        tableHeadLabels: props.tableHeadLabels,
        tableBodyLabels: props.tableBodyLabels,
        actionSortAscending: props.actionSortAscending,
        actionSortDescending: props.actionSortDescending,
        contentDeleteEntry: props.contentDeleteEntry,
        contentSearchNotFound: props.contentSearchNotFound,
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
  tableBodyLabels: PropTypes.array,
  numberSearchOnActive: PropTypes.number,
  formatDate: PropTypes.func,
  actionSortAscending: PropTypes.func,
  actionSortDescending: PropTypes.func,
  actionDeleteListItem: PropTypes.func,
  actionOnSearchActive: PropTypes.func,
  actionOnSearchInactive: PropTypes.func,
  contentDeleteEntry: PropTypes.string,
  contentSearchNotFound: PropTypes.string,
};

export default ListTableContext;
