import React from "react";
import PropTypes from "prop-types";

const ListTableBody = (props) => {
  function getDataDisplayedByPage() {
    const minIndex = props.stateTablePage * 10 - 1;
    const maxIndex = (props.stateTablePage + 1) * 10;
    return props.dataFiltered.filter(
      (item) =>
        minIndex < props.dataFiltered.indexOf(item) &&
        props.dataFiltered.indexOf(item) < maxIndex
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
                  {item.streetNumber +
                    ", " +
                    item.street[0].toUpperCase() +
                    item.street.slice(1)}
                </p>
                <p>
                  <span className="bodyRowContent-label">Zip code : </span>
                  {item.zipCode}
                </p>
                <p>
                  <span className="bodyRowContent-label">City : </span>
                  {item.city[0].toUpperCase() + item.city.slice(1)}
                </p>
                <p>
                  <span className="bodyRowContent-label">State : </span>
                  {item.state.toUpperCase()}
                </p>
              </div>
              <div className="bodyRow-content--department">
                <h2>- DEPARTMENT -</h2>
                <p>
                  {item.department[0].toUpperCase() + item.department.slice(1)}
                </p>
              </div>
              <div
                className="bodyRow-content--delete"
                onClick={() =>
                  props.actionDeleteListItem(
                    props.dispatch,
                    props.dataNotFiltered,
                    item
                  )
                }
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

ListTableBody.propTypes = {
  dataNotFiltered: PropTypes.array,
  dataFiltered: PropTypes.array,
  stateTablePage: PropTypes.number,
  actionDeleteListItem: PropTypes.func,
  dispatch: PropTypes.func,
};

export default ListTableBody;
