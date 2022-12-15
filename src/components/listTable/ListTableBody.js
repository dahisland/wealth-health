import React from "react";
import { actionDeleteEmployee } from "../../app/actions/deleteEmployee.action";

const ListTableBody = (props) => {
  return (
    <React.Fragment>
      {props.dataListFiltered.length !== 0 ? (
        <React.Fragment>
          {props.dataListFiltered.map((item, index) => (
            <div key={"listBody-row-" + index} className="listTable-bodyRow">
              <div className="bodyRow-content">
                <h2>
                  {item.lastName.toUpperCase()} {item.firstName}
                </h2>
                <p>
                  <span className="bodyRowContent-label">Date of Birth : </span>
                  {new Date(item.dateOfBirth).toLocaleDateString("fr")}
                </p>
                <p>
                  <span className="bodyRowContent-label">Start date : </span>
                  {new Date(item.startDate).toLocaleDateString("fr")}
                </p>
              </div>
              <div className="bodyRow-content ">
                <p>
                  <span className="bodyRowContent-label">Street : </span>
                  {item.street}
                </p>
                <p>
                  <span className="bodyRowContent-label">Zip code : </span>
                  {item.zipCode}
                </p>
                <p>
                  <span className="bodyRowContent-label">City : </span>
                  {item.city}
                </p>
                <p>
                  <span className="bodyRowContent-label">State : </span>
                  {item.state}
                </p>
              </div>
              <div className="bodyRow-content--department">
                <h2>DEPARTMENT : </h2>
                <p>{item.department}</p>
              </div>
              <div
                className="bodyRow-content--delete"
                onClick={() =>
                  actionDeleteEmployee(props.dispatch, props.dataList, item)
                }
              >
                delete this entry
              </div>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <div>No data employee is available</div>
      )}
    </React.Fragment>
  );
};

export default ListTableBody;
