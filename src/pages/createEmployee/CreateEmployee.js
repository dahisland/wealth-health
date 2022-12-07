import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { actionAddEmployee } from "../../app/actions/addEmployee.action";
import { useDispatch } from "react-redux";

import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";
import { identityForm, addressForm, departmentForm } from "../../data/formData";
import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";
import ScrollingSelect from "../../components/scrollingSelect/ScrollingSelect";
import DatePicker from "../../components/datePicker/DatePicker";
import InputItem from "../../components/inputItem/InputItem";
import ValidationModale from "../../components/validationModale/ValidationModale";
import FormButtons from "../../components/formButtons/FormButtons";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [submitStatus, setSubmitStatus] = useState(false);
  const methods = useForm();

  /**
   * Function on form submit to create Employee
   * @param {object} data - Data collected from useForm()
   * @async
   */
  async function submitLoginForm(data) {
    const dataFormatted = new modelNewEmployeeData(data);
    console.log(dataFormatted.formatNewEmployeeData());
    setSubmitStatus(true);
    methods.reset();
    actionAddEmployee(dispatch, dataFormatted.formatNewEmployeeData());
  }
  return (
    <div className="currentPage">
      <MainNav />
      <main className="pageCreate_main">
        <h1>CREATE EMPLOYEE</h1>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(submitLoginForm)}
            className="newEmployee_form"
          >
            <div className="newEmployeeForm_identity">
              {identityForm.map((item) =>
                item.type !== "date" ? (
                  <InputItem
                    key={item.id}
                    itemId={item.id}
                    itemType={item.type}
                    itemLabel={item.label}
                    itemErrors={methods.errors}
                  />
                ) : (
                  <DatePicker
                    key={item.id}
                    itemId={item.id}
                    itemLabel={item.label}
                    itemErrors={methods.errors}
                  />
                )
              )}
            </div>

            <fieldset className="newEmployeeFieldset_address">
              <legend>Address</legend>

              {addressForm.map((item) =>
                item.type !== "select" ? (
                  <InputItem
                    key={item.id}
                    itemId={item.id}
                    itemType={item.type}
                    itemLabel={item.label}
                    itemErrors={methods.errors}
                  />
                ) : (
                  <ScrollingSelect
                    key={item.id}
                    itemId={item.id}
                    itemLabel={item.label}
                    itemOptions={item.options}
                    itemErrors={methods.errors}
                  />
                )
              )}
            </fieldset>

            <div className="newEmployeeForm_department">
              <ScrollingSelect
                itemId={departmentForm.id}
                itemLabel={departmentForm.label}
                itemOptions={departmentForm.options}
                itemErrors={methods.errors}
              />
            </div>

            <FormButtons eventOnClick={() => methods.clearErrors()} />
          </form>
        </FormProvider>
      </main>

      <Footer />

      {submitStatus ? (
        <ValidationModale
          eventOnClick={() => setSubmitStatus(false)}
          modaleIcon={"X"}
          modaleContent={<p>User successfully created</p>}
        />
      ) : null}
    </div>
  );
};

export default CreateEmployee;
