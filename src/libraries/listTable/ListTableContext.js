import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const tableListContext = createContext();

const ListTableContext = (props) => {
  const [tablePage, setTablePage] = useState(0);
  const [numberDataDisplayed, setNumberDataDisplayed] = useState(10);

  return (
    <tableListContext.Provider
      value={{
        dataFiltered: props.dataFiltered,
        stateTablePage: tablePage,
        setTablePage: setTablePage,
        numberDataDisplayed: numberDataDisplayed,
        setNumberDataDisplayed: setNumberDataDisplayed,
        numberSearchOnActive: props.numberSearchOnActive,
        formatDate: props.formatDate,
        tableHeadLabels: props.tableHeadLabels,
        tableBodyLabels: props.tableBodyLabels,
        tableHeadLabelLeftIcon: props.tableHeadLabelLeftIcon,
        tableHeadLabelRightIcon: props.tableHeadLabelRightIcon,
        actionHeadLabelLeftIcon: props.actionHeadLabelLeftIcon,
        actionHeadLabelRightIcon: props.actionHeadLabelRightIcon,
        actionOnSearchActive: props.actionOnSearchActive,
        actionOnSearchInactive: props.actionOnSearchInactive,
        actionDeleteListItem: props.actionDeleteListItem,
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
  actionHeadLabelLeftIcon: PropTypes.func,
  actionHeadLabelRightIcon: PropTypes.func,
  actionDeleteListItem: PropTypes.func,
  actionOnSearchActive: PropTypes.func,
  actionOnSearchInactive: PropTypes.func,
  contentDeleteEntry: PropTypes.string,
  contentSearchNotFound: PropTypes.string,
};

export default ListTableContext;
