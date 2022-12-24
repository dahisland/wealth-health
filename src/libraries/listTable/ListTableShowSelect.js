import React, { useContext } from "react";
import { tableListContext } from "./ListTableContext";

const ListTableShowSelect = () => {
  const { setNumberDataDisplayed } = useContext(tableListContext);
  const { setTablePage } = useContext(tableListContext);
  const { tableShowValues } = useContext(tableListContext);

  function selectShowNumber(e) {
    setTablePage(0);
    setNumberDataDisplayed(parseInt(e.target.value));
  }

  return (
    <div className="listTable-show">
      <label htmlFor="listTableShow-entries">Show :</label>
      <select id="listTableShow-entries" onChange={(e) => selectShowNumber(e)}>
        {tableShowValues.map((value, index) => (
          <option key={"showValue-" + value + index} value={value}>
            {value}
          </option>
        ))}
      </select>
      <p>entries</p>
    </div>
  );
};

export default ListTableShowSelect;
