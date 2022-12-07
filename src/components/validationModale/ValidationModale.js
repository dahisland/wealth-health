import React from "react";

const ValidationModale = ({ eventOnClick, modaleIcon, modaleContent }) => {
  return (
    <div className="modale">
      <div className="inner-modale">
        <div className="modale-icon" onClick={eventOnClick}>
          {modaleIcon}
        </div>
        <div className="modale-content">{modaleContent}</div>
      </div>
    </div>
  );
};

export default ValidationModale;
