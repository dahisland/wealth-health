import React from "react";

const FormButtons = ({ eventOnClick }) => {
  return (
    <div className="newEmployeeForm_buttons">
      <button type="submit">Save</button>
      <button type="reset" onClick={eventOnClick}>
        Reset
      </button>
    </div>
  );
};

export default FormButtons;
