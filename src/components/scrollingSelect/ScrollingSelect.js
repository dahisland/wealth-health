import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const ScrollingSelect = (props) => {
  const { register } = useFormContext();
  return (
    <div className="newEmployeeForm_item">
      <label htmlFor={props.itemId}>{props.itemLabel + " : "}</label>
      <select
        name={props.itemId}
        id={props.itemId}
        defaultValue={""}
        className={"employeeFormItem-input"}
        {...register(props.itemId, {
          required: {
            value: true,
            message: "You must select an option",
          },
        })}
      >
        <option value="" disabled className="default-option">
          - - - Select an item - - -
        </option>
        {props.itemOptions
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .map((option) => (
            <option
              value={option.abbreviation ? option.abbreviation : option.name}
              key={props.itemId + option.name}
            >
              {option.name}
            </option>
          ))}
      </select>
      <p className="input-error-message">
        <ErrorMessage errors={props.itemErrors} name={props.itemId} />
      </p>
    </div>
  );
};

export default ScrollingSelect;
