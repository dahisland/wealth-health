import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const DatePicker = ({ itemId, itemLabel, itemErrors }) => {
  const { register } = useFormContext();
  return (
    <div className="newEmployeeForm_category">
      <div className="newEmployeeForm_item" key={itemId}>
        <label htmlFor={itemId}>{itemLabel + " : "}</label>
        <input
          type="date"
          id={itemId}
          name={itemId}
          {...register(itemId, {
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value:
                /^(19[0-9][0-9]|20[0-2][0-9])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
              message: "Error in date format",
            },
          })}
        />
        <p className="input-error-message">
          <ErrorMessage errors={itemErrors} name={itemId} />
        </p>
      </div>
    </div>
  );
};

export default DatePicker;
