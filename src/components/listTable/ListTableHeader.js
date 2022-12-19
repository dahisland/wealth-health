import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ListTableHeader = (props) => {
  function sortAscending(itemData) {
    props.actionSortAscending(props.dispatch, props.dataFiltered, itemData);
  }

  function sortDescending(itemData) {
    props.actionSortDescending(props.dispatch, props.dataFiltered, itemData);
  }

  return (
    <div className="listTable-headRow">
      {props.sortsLabels.map((item, index) => (
        <p key={"table-head-" + index} className={"headRow-data"}>
          <span
            className="headRow-iconsSort"
            onClick={() => sortAscending(item)}
          >
            <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon>
          </span>
          <span>{item.label}</span>
          <span
            className="headRow-iconsSort"
            onClick={() => sortDescending(item)}
          >
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </span>
        </p>
      ))}
    </div>
  );
};

export default ListTableHeader;
