import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ListTableHeader = (props) => {
  function sortAscending(employeeData, setEmployeesData, itemData) {
    let copyArray = [...employeeData];
    // copyArray.forEach((item) => {
    //   item.dateOfBirth = new Date(item.dateOfBirth).valueOf();
    //   item.startDate = new Date(item.startDate).valueOf();
    // });

    let copyArraySorted = copyArray.sort(function compare(a, b) {
      if (a[itemData.keyRef] < b[itemData.keyRef]) return -1;
      if (a[itemData.keyRef] > b[itemData.keyRef]) return 1;
      return 0;
    });
    setEmployeesData(copyArraySorted);
  }

  function sortDescending(employeeData, setEmployeesData, itemData) {
    let copyArray = [...employeeData];
    // copyArray.forEach((item) => {
    //   item.dateOfBirth = new Date(item.dateOfBirth).valueOf();
    //   item.startDate = new Date(item.startDate).valueOf();
    // });
    let copyArraySorted = copyArray.sort(function compare(a, b) {
      if (a[itemData.keyRef] < b[itemData.keyRef]) return 1;
      if (a[itemData.keyRef] > b[itemData.keyRef]) return -1;
      return 0;
    });
    console.log(copyArraySorted);
    setEmployeesData(copyArraySorted);
  }
  return (
    <div className="listTable-headRow">
      {props.headLabels.map((item, index) => (
        <p key={"table-head-" + index} className={"headRow-data"}>
          <span
            className="headRow-iconsSort"
            onClick={
              props.isOnSearch === false
                ? () =>
                    sortAscending(
                      props.dataListFiltered,
                      props.setDataListFiltered,
                      item
                    )
                : () =>
                    sortAscending(
                      props.resultSearch,
                      props.setResultSearch,
                      item
                    )
            }
          >
            <FontAwesomeIcon icon={faCaretUp}></FontAwesomeIcon>
          </span>
          <span>{item.label}</span>
          <span
            className="headRow-iconsSort"
            onClick={
              props.isOnSearch === false
                ? () =>
                    sortDescending(
                      props.dataListFiltered,
                      props.setDataListFiltered,
                      item
                    )
                : () =>
                    sortDescending(
                      props.resultSearch,
                      props.setResultSearch,
                      item
                    )
            }
          >
            <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </span>
        </p>
      ))}
    </div>
  );
};

export default ListTableHeader;
