import React, { useContext } from "react";
import { tableListContext } from "./ListTableContext";

const ListTableShowSelect = () => {
  const { setNumberDataDisplayed } = useContext(tableListContext);

  return (
    <div className="listTable-show">
      <label htmlFor="show-entries">Show :</label>
      <select
        id="show-entries"
        onChange={(e) => setNumberDataDisplayed(parseInt(e.target.value))}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <p>entries</p>
    </div>
  );
};

export default ListTableShowSelect;
