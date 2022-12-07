import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const InputItem = ({ itemId, itemType, itemLabel, itemErrors }) => {
  const { register } = useFormContext();
  return (
    <div className="newEmployeeForm_category">
      <div className="newEmployeeForm_item" key={itemId}>
        <label htmlFor={itemId}>{itemLabel + " : "}</label>
        <input
          type={itemType}
          id={itemId}
          name={itemId}
          {...register(
            itemId,
            itemType === "number"
              ? {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 5,
                    message: "Minimum 5 characters",
                  },
                }
              : {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  minLength: {
                    value: 2,
                    message: "Minimum 2 characters",
                  },
                }
          )}
        />
        <p className="input-error-message">
          <ErrorMessage errors={itemErrors} name={itemId} />
        </p>
      </div>
    </div>
  );
};

export default InputItem;
