import React from "react";
import PropTypes from "prop-types";

const FormButtons = (props) => {
  return (
    <div className="newEmployeeForm_buttons">
      <button type="submit">Save</button>
      <button type="reset" onClick={props.eventOnClick}>
        Reset
      </button>
    </div>
  );
};

FormButtons.propTypes = {
  eventOnClick: PropTypes.func,
};

export default FormButtons;
