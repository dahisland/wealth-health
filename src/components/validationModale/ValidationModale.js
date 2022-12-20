import React from "react";
import "./validationModale.css";

const ValidationModale = (props) => {
  return (
    <div className="modale-global-container">
      <div className={"modale-inner-container"} id={props.idInnerContainer}>
        <div className={"modale-header"} id={props.idModaleHeader}>
          <p id={props.idModaleTitle}>{props.modaleTitle}</p>
          <span
            className={"modale-icon"}
            id={props.idModaleIcon}
            onClick={() => props.setSubmitStatus(false)}
          >
            {props.modaleIcon ? props.modaleIcon : "X"}
          </span>
        </div>
        <div className="modale-content" id={props.idModaleContent}>
          {props.modaleContent}
        </div>
      </div>
    </div>
  );
};

export default ValidationModale;
