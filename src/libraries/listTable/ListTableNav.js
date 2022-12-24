import React, { useContext } from "react";
import { tableListContext } from "./ListTableContext";

const ListTableNav = () => {
  const { stateTablePage } = useContext(tableListContext);
  const { setTablePage } = useContext(tableListContext);
  const { dataFiltered } = useContext(tableListContext);
  const { numberDataDisplayed } = useContext(tableListContext);

  // Change page number depending on array data length
  function navToNextTable() {
    if (
      stateTablePage <
      parseInt((dataFiltered.length - 1) / numberDataDisplayed, 10)
    ) {
      setTablePage(stateTablePage + 1);
    }
  }

  // Change page number depending on array data length
  function navToPreviousTable() {
    if (stateTablePage > 0) {
      setTablePage(stateTablePage - 1);
    }
  }

  return (
    <div className="listTable-nav">
      <button
        className={stateTablePage === 0 ? "nav-arrow--disabled" : "nav-arrow"}
        onClick={() => navToPreviousTable()}
      >
        {stateTablePage === 0
          ? "<"
          : "< " +
            stateTablePage +
            "/" +
            parseInt((dataFiltered.length - 1) / numberDataDisplayed + 1)}
      </button>

      <p>
        {dataFiltered.length !== numberDataDisplayed * stateTablePage
          ? parseInt(dataFiltered.length) >
            parseInt(stateTablePage * numberDataDisplayed + numberDataDisplayed)
            ? parseInt(stateTablePage * numberDataDisplayed + 1) +
              "-" +
              parseInt(
                stateTablePage * numberDataDisplayed + numberDataDisplayed
              ) +
              " of " +
              parseInt(dataFiltered.length) +
              " entries"
            : parseInt(stateTablePage * numberDataDisplayed + 1) +
              "-" +
              parseInt(dataFiltered.length) +
              " of " +
              parseInt(dataFiltered.length) +
              " entries"
          : null}
      </p>

      <button
        className={
          stateTablePage >=
          parseInt((dataFiltered.length - 1) / numberDataDisplayed, 10)
            ? "nav-arrow--disabled"
            : "nav-arrow"
        }
        onClick={() => navToNextTable()}
      >
        {stateTablePage >=
        parseInt((dataFiltered.length - 1) / numberDataDisplayed, 10)
          ? ">"
          : stateTablePage +
            2 +
            "/" +
            parseInt((dataFiltered.length - 1) / numberDataDisplayed + 1) +
            " >"}
      </button>
    </div>
  );
};

export default ListTableNav;
