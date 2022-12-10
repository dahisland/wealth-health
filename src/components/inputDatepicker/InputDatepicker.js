import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "../../../node_modules/react-datepicker/dist/react-datepicker.css";

const InputDatepicker = ({
  itemId,
  itemLabel,
  itemErrors,
  itemPlaceholder,
}) => {
  const { control } = useFormContext();

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <input
      type="text"
      name={itemId}
      id={itemId}
      onClick={onClick}
      defaultValue={value}
      ref={ref}
      className={"employeeFormItem-input"}
      placeholder={itemPlaceholder}
      autoComplete="off"
    />
  ));

  return (
    <div className="newEmployeeForm_category">
      <div className="newEmployeeForm_item" key={itemId}>
        <label htmlFor={itemId}>{itemLabel + " : "}</label>
        <Controller
          control={control}
          name={itemId}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <ReactDatePicker
              name={itemId}
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              minDate={new Date("01-01-1900")}
              maxDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
              strictParsing
              isClearable
              todayButton="Today"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              customInput={<ExampleCustomInput />}
            >
              <div className={"legend-calendar"}>
                {"Choose the employee " + itemLabel}
              </div>
            </ReactDatePicker>
          )}
        />
        <p className="input-error-message">
          <ErrorMessage errors={itemErrors} name={itemId} />
        </p>
      </div>
    </div>
  );
};

export default InputDatepicker;
