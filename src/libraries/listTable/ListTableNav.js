import React, { useContext } from "react";
import { tableListContext } from "./ListTableContext";

const ListTableNav = () => {
  const { stateTablePage } = useContext(tableListContext);
  const { setTablePage } = useContext(tableListContext);
  const { dataFiltered } = useContext(tableListContext);

  // Change page number depending on array data length
  function navToNextTable() {
    console.log();
    if (stateTablePage < parseInt((dataFiltered.length - 1) / 10, 10)) {
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
            parseInt((dataFiltered.length - 1) / 10 + 1)}
      </button>

      <p>
        {parseInt(stateTablePage * 10) !== dataFiltered.length
          ? (stateTablePage + 1) * 10 > dataFiltered.length
            ? parseInt(stateTablePage * 10 + 1) +
              " - " +
              parseInt(dataFiltered.length) +
              " of " +
              parseInt(dataFiltered.length) +
              " entries"
            : parseInt(stateTablePage * 10 + 1) +
              " - " +
              (stateTablePage + 1) * 10 +
              " of " +
              parseInt(dataFiltered.length) +
              " entries"
          : ""}
      </p>

      <button
        className={
          stateTablePage >= parseInt((dataFiltered.length - 1) / 10, 10)
            ? "nav-arrow--disabled"
            : "nav-arrow"
        }
        onClick={() => navToNextTable()}
      >
        {stateTablePage >= parseInt((dataFiltered.length - 1) / 10, 10)
          ? ">"
          : stateTablePage +
            2 +
            "/" +
            parseInt((dataFiltered.length - 1) / 10 + 1) +
            " >"}
      </button>
    </div>
  );
};

export default ListTableNav;
