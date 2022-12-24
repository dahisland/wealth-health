import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

const ScrollingSelect = (props) => {
  const { register } = useFormContext();
  return (
    <div className="scrollingSelect-container">
      <label htmlFor={props.itemId}>{props.itemLabel + " : "}</label>
      <select
        name={props.itemId}
        id={props.itemId}
        defaultValue={props.defaultValue}
        className={"scrollingSelect-scrollingMenu"}
        {...register(props.itemId, props.conditionValidation)}
      >
        <option value="" disabled className="scrollingSelect-defaultOption">
          {props.optionDisabledContent}
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
      <p className="scrollingSelect-errorMessage">
        <ErrorMessage errors={props.itemErrors} name={props.itemId} />
      </p>
    </div>
  );
};

ScrollingSelect.propTypes = {
  itemId: PropTypes.string,
  itemLabel: PropTypes.string,
  itemOptions: PropTypes.array,
};

export default ScrollingSelect;
