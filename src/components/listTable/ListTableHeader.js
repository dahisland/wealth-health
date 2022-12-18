import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ListTableHeader = (props) => {
  function sortAscending(itemData) {
    let copyArray = [...props.dataFiltered];
    let copyArraySorted = copyArray.sort(function compare(a, b) {
      if (a[itemData.keyRef] < b[itemData.keyRef]) return -1;
      if (a[itemData.keyRef] > b[itemData.keyRef]) return 1;
      return 0;
    });
    props.setDataFiltered(copyArraySorted);
  }

  function sortDescending(itemData) {
    let copyArray = [...props.dataFiltered];
    let copyArraySorted = copyArray.sort(function compare(a, b) {
      if (a[itemData.keyRef] < b[itemData.keyRef]) return 1;
      if (a[itemData.keyRef] > b[itemData.keyRef]) return -1;
      return 0;
    });
    props.setDataFiltered(copyArraySorted);
  }
  return (
    <div className="listTable-headRow">
      {props.headLabels.map((item, index) => (
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
