import React from "react";

const ListTableNav = (props) => {
  function navToNextTable(arrayEmployeesList) {
    if (
      props.stateTablePage < parseInt((arrayEmployeesList.length - 1) / 10, 10)
    ) {
      props.setTablePage(props.stateTablePage + 1);
    }
  }

  function navToPreviousTable() {
    if (props.stateTablePage > 0) {
      props.setTablePage(props.stateTablePage - 1);
    }
  }
  return (
    <div className="listTable-nav">
      <button
        className={
          props.stateTablePage === 0 ? "nav-arrow--disabled" : "nav-arrow"
        }
        onClick={() => navToPreviousTable()}
      >
        Previous
      </button>

      <p>{props.stateTablePage + 1}</p>
      <button
        className={
          props.isOnSearch === false
            ? props.stateTablePage >=
              parseInt((props.dataList.length - 1) / 10, 10)
              ? "nav-arrow--disabled"
              : "nav-arrow"
            : props.stateTablePage >=
              parseInt((props.resultSearch.length - 1) / 10, 10)
            ? "nav-arrow--disabled"
            : "nav-arrow"
        }
        onClick={
          props.isOnSearch === false
            ? () => navToNextTable(props.dataList)
            : () => navToNextTable(props.resultSearch)
        }
      >
        Next
      </button>
    </div>
  );
};

export default ListTableNav;
