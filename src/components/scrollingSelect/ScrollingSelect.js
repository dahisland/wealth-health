import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const ScrollingSelect = ({ itemId, itemLabel, itemOptions, itemErrors }) => {
  const { register } = useFormContext();
  return (
    <div className="newEmployeeForm_category">
      <div className="newEmployeeForm_item">
        <label htmlFor={itemId}>{itemLabel + " : "}</label>
        <select
          name={itemId}
          id={itemId}
          defaultValue={""}
          {...register(itemId, {
            required: {
              value: true,
              message: "You must select an option",
            },
          })}
        >
          <option value="" disabled className="default-option">
            - - - Select an item - - -
          </option>
          {itemOptions
            .sort((a, b) => (a.name < b.name ? -1 : 1))
            .map((option) => (
              <option
                value={option.abbreviation ? option.abbreviation : option.name}
                key={itemId + option.name}
              >
                {option.name}
              </option>
            ))}
        </select>
        <p className="input-error-message">
          <ErrorMessage errors={itemErrors} name={itemId} />
        </p>
      </div>
    </div>
  );
};

export default ScrollingSelect;
