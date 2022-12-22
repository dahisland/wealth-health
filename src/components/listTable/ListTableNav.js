import React, { useContext } from "react";
import { tableListContext } from "./ListTableContext";

const ListTableNav = () => {
  const { stateTablePage } = useContext(tableListContext);
  const { setTablePage } = useContext(tableListContext);
  const { dataFiltered } = useContext(tableListContext);

  // Change page number depending on array data length
  function navToNextTable() {
    console.log(dataFiltered.length);
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
        Previous
      </button>

      <p>{stateTablePage + 1}</p>
      <button
        className={
          stateTablePage >= parseInt((dataFiltered.length - 1) / 10, 10)
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
