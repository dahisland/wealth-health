import React, { useContext } from "react";
import { tableListContext } from "./ListTableContext";

const ListTableBody = () => {
  const { dataFiltered } = useContext(tableListContext);
  const { stateTablePage } = useContext(tableListContext);
  const { actionDeleteListItem } = useContext(tableListContext);
  const { tableHeadLabels } = useContext(tableListContext);

  function getDataDisplayedByPage() {
    const minIndex = stateTablePage * 10 - 1;
    const maxIndex = (stateTablePage + 1) * 10;
    return dataFiltered.filter(
      (item) =>
        minIndex < dataFiltered.indexOf(item) &&
        dataFiltered.indexOf(item) < maxIndex
    );
  }

  return (
    <React.Fragment>
      {getDataDisplayedByPage().length !== 0 ? (
        <React.Fragment>
          {getDataDisplayedByPage().map((item, index) => (
            <div key={"listBody-row-" + index} className="listTable-bodyRow">
              <div className="bodyRow-content">
                <h2>
                  {item.lastName.toUpperCase()}{" "}
                  {item.firstName[0].toUpperCase() + item.firstName.slice(1)}
                </h2>
                <p>
                  <span className="bodyRowContent-label">
                    {tableHeadLabels[2].label + " : "}
                  </span>
                  {new Date(item.dateOfBirth).toLocaleDateString("fr")}
                </p>
                <p>
                  <span className="bodyRowContent-label">
                    {tableHeadLabels[3].label + " : "}
                  </span>
                  {new Date(item.startDate).toLocaleDateString("fr")}
                </p>
              </div>
              <div className="bodyRow-content ">
                <p>
                  <span className="bodyRowContent-label">
                    {tableHeadLabels[4].label + " : "}
                  </span>
                  {item.streetNumber +
                    ", " +
                    item.street[0].toUpperCase() +
                    item.street.slice(1)}
                </p>
                <p>
                  <span className="bodyRowContent-label">
                    {tableHeadLabels[5].label + " : "}
                  </span>
                  {item.zipCode}
                </p>
                <p>
                  <span className="bodyRowContent-label">
                    {tableHeadLabels[6].label + " : "}
                  </span>
                  {item.city[0].toUpperCase() + item.city.slice(1)}
                </p>
                <p>
                  <span className="bodyRowContent-label">
                    {tableHeadLabels[7].label + " : "}
                  </span>
                  {item.state.toUpperCase()}
                </p>
              </div>
              <div className="bodyRow-content--department">
                <h2>{tableHeadLabels[8].label + " : "}</h2>
                <p>
                  {item.department[0].toUpperCase() + item.department.slice(1)}
                </p>
              </div>
              <div
                className="bodyRow-content--delete"
                onClick={() => actionDeleteListItem(item)}
              >
                Delete this entry
              </div>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <div>No data employee have been found</div>
      )}
    </React.Fragment>
  );
};

export default ListTableBody;
