import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { actionAddEmployee } from "../../app/actions/addEmployee.action";
import { useDispatch } from "react-redux";

import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";
import { identityForm, addressForm, departmentForm } from "../../data/formData";
import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [submitStatus, setSubmitStatus] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm();

  /**
   * Function on form submit to action login
   * @param {object} data - Data collected from useForm()
   * @async
   */
  async function submitLoginForm(data) {
    const dataFormatted = new modelNewEmployeeData(data);
    console.log(dataFormatted.formatNewEmployeeData());
    setSubmitStatus(true);
    reset();
    actionAddEmployee(dispatch, dataFormatted.formatNewEmployeeData());
  }
  return (
    <div className="currentPage">
      <MainNav />
      <main className="pageCreate_main">
        <h1>CREATE EMPLOYEE</h1>

        <form
          onSubmit={handleSubmit(submitLoginForm)}
          className="newEmployee_form"
        >
          <div className="newEmployeeForm_category">
            {identityForm.map((item) => (
              <div className="newEmployeeForm_item" key={item.id}>
                <label htmlFor={item.id}>{item.label + " : "}</label>
                <input
                  type={item.type}
                  id={item.id}
                  name={item.id}
                  {...register(item.id, {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                />
                <p className="input-error-message">
                  <ErrorMessage errors={errors} name={item.id} />
                </p>
              </div>
            ))}
          </div>

          <fieldset className="newEmployeeFieldset_address">
            <legend>Address</legend>

            {addressForm.map((item) =>
              item.type ? (
                <div className="newEmployeeForm_item" key={item.id}>
                  <label htmlFor={item.id}>{item.label + " : "}</label>
                  <input
                    type={item.type}
                    id={item.id}
                    name={item.id}
                    {...register(
                      item.id,
                      item.type === "text"
                        ? {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                          }
                        : {
                            required: {
                              value: true,
                              message: "This field is required",
                            },
                            minLength: {
                              value: 5,
                              message: "Minimum 5 characters",
                            },
                          }
                    )}
                  />
                  <p className="input-error-message">
                    <ErrorMessage errors={errors} name={item.id} />
                  </p>
                </div>
              ) : (
                <div className="newEmployeeForm_item" key={item.id}>
                  <label htmlFor={item.id}>{item.label + " : "}</label>
                  <select
                    name={item.id}
                    id={item.id}
                    defaultValue={""}
                    {...register(item.id, {
                      required: {
                        value: true,
                        message: "You must select an option",
                      },
                    })}
                  >
                    <option value="" disabled className="default-option">
                      - - - Select a state - - -
                    </option>
                    {item.options
                      .sort((a, b) => (a.name < b.name ? -1 : 1))
                      .map((option) => (
                        <option
                          value={option.abbreviation}
                          key={item.id + option.abbreviation}
                        >
                          {option.name}
                        </option>
                      ))}
                  </select>
                  <p className="input-error-message">
                    <ErrorMessage errors={errors} name={item.id} />
                  </p>
                </div>
              )
            )}
          </fieldset>

          <div className="newEmployeeForm_category">
            <div className="newEmployeeForm_item">
              <label htmlFor={departmentForm.id}>
                {departmentForm.label + " : "}
              </label>
              <select
                name={departmentForm.id}
                id={departmentForm.id}
                defaultValue={""}
                {...register(departmentForm.id, {
                  required: {
                    value: true,
                    message: "You must select an option",
                  },
                })}
              >
                <option value="" disabled className="default-option">
                  - - - Select a department - - -
                </option>
                {departmentForm.options
                  .sort((a, b) => (a.name < b.name ? -1 : 1))
                  .map((option) => (
                    <option
                      value={option.name}
                      key={departmentForm.id + option.name}
                    >
                      {option.name}
                    </option>
                  ))}
              </select>
              <p className="input-error-message">
                <ErrorMessage errors={errors} name={departmentForm.id} />
              </p>
            </div>
          </div>

          <div className="newEmployeeForm_buttons">
            <button type="submit">Save</button>
            <button type="reset" onClick={() => clearErrors()}>
              Reset
            </button>
          </div>
        </form>
      </main>
      <Footer />
      {submitStatus ? (
        <div className="modale">
          <div className="modale-content">
            <p onClick={() => setSubmitStatus(false)} className="icon-close">
              X
            </p>
            <p>User successfully created</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CreateEmployee;
