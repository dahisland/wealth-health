import React from "react";

const ListTableNav = (props) => {
  function navToNextTable() {
    if (
      props.stateTablePage < parseInt((props.dataFiltered.length - 1) / 10, 10)
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
          props.stateTablePage >=
          parseInt((props.dataFiltered.length - 1) / 10, 10)
            ? "nav-arrow--disabled"
            : "nav-arrow"
        }
        onClick={() => navToNextTable()}
      >
        Next
      </button>
    </div>
  );
};

export default ListTableNav;
