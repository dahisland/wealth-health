import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

const InputItem = (props) => {
  const { register } = useFormContext();
  return (
    <div className="newEmployeeForm_item" key={props.itemId}>
      <label htmlFor={props.itemId}>{props.itemLabel + " : "}</label>
      <input
        type={props.itemType}
        id={props.itemId}
        name={props.itemId}
        className={"employeeFormItem-input"}
        placeholder={props.itemPlaceholder}
        autoComplete="off"
        {...register(
          props.itemId,
          props.itemType === "number" && props.itemId === "zipCode"
            ? {
                required: {
                  value: true,
                  message: "This field is required",
                },
                minLength: {
                  value: 5,
                  message: "Min 5 characters",
                },
                maxLength: {
                  value: 5,
                  message: "Max 5 characters",
                },
              }
            : {
                required: {
                  value: true,
                  message: "This field is required",
                },
              }
        )}
      />
      <p className="input-error-message">
        <ErrorMessage errors={props.itemErrors} name={props.itemId} />
      </p>
    </div>
  );
};

export default InputItem;
