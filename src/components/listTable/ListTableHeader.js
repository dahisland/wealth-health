import React, { useContext } from "react";
import { tableListContext } from "./ListTableContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ListTableHeader = () => {
  const { tableHeadLabels } = useContext(tableListContext);
  const { actionSortAscending } = useContext(tableListContext);
  const { actionSortDescending } = useContext(tableListContext);

  return (
    <div className="listTable-headRow">
      {tableHeadLabels.map((item, index) => (
        <p key={"table-head-" + index} className={"headRow-data"}>
          <span
            className="headRow-iconsSort"
            onClick={() => actionSortAscending(item)}
          >
            <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon>
          </span>
          <span>{item.label}</span>
          <span
            className="headRow-iconsSort"
            onClick={() => actionSortDescending(item)}
          >
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </span>
        </p>
      ))}
    </div>
  );
};

export default ListTableHeader;
