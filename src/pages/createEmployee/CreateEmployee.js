import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { actionAddEmployee } from "../../app/actions/addEmployee.action";
import { useDispatch } from "react-redux";
import MainNav from "../../components/mainNav/MainNav";
import Footer from "../../components/footer/Footer";
import { identityForm, addressForm, departmentForm } from "../../data/formData";
import { modelNewEmployeeData } from "../../data/modelNewEmployeeData";
import ScrollingSelect from "../../components/scrollingSelect/ScrollingSelect";
import InputDatepicker from "../../components/inputDatepicker/InputDatepicker";
import InputItem from "../../components/inputItem/InputItem";
import FormButtons from "../../components/formButtons/FormButtons";
import { ModaleFullscreen } from "modale-fullscreen-customizable";

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const [modaleIsOpened, setModaleIsOpened] = useState(false);
  const methods = useForm();

  /**
   * Function on form submit to create Employee
   * @param {object} data - Data collected from useForm()
   * @async
   */
  async function submitLoginForm(data) {
    const dataFormatted = new modelNewEmployeeData(data);
    console.log(dataFormatted.formatForDisplay());
    setModaleIsOpened(true);
    console.log(methods.errors);
    methods.reset();
    actionAddEmployee(dispatch, dataFormatted.formatForDisplay());
  }

  function resetAll() {
    methods.clearErrors();
    methods.reset();
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
                    itemPlaceholder={item.placeholder}
                  />
                ) : (
                  <InputDatepicker
                    key={item.id}
                    itemId={item.id}
                    itemLabel={item.label}
                    itemErrors={methods.errors}
                    itemPlaceholder={item.placeholder}
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
                    itemPlaceholder={item.placeholder}
                  />
                ) : (
                  <ScrollingSelect
                    key={item.id}
                    itemId={item.id}
                    itemLabel={item.label}
                    itemOptions={item.options}
                    itemErrors={methods.errors}
                    defaultValue={""}
                    optionDisabledContent={"- - - Select a State - - -"}
                    conditionValidation={{
                      required: {
                        value: true,
                        message: "You must select a State",
                      },
                    }}
                  />
                )
              )}
            </fieldset>

            <div className="newEmployeeForm_department">
              {departmentForm.map((item) => (
                <ScrollingSelect
                  key={item.id}
                  itemId={item.id}
                  itemLabel={item.label}
                  itemOptions={item.options}
                  itemErrors={item.errors}
                  optionDisabledContent={"- - - Select a Department - - -"}
                  defaultValue={""}
                  conditionValidation={{
                    required: {
                      value: true,
                      message: "You must select a Department",
                    },
                  }}
                />
              ))}
            </div>

            <FormButtons eventOnClick={() => resetAll()} />
          </form>
        </FormProvider>
      </main>

      <Footer />

      {modaleIsOpened ? (
        <ModaleFullscreen
          eventOnClickIcon={() => setModaleIsOpened(false)}
          idInnerContainer={"modale-inner-container--customize"}
          idModaleIcon={"modale-icon--customize"}
          modaleContent={<p>User successfully created</p>}
        />
      ) : null}
    </div>
  );
};

export default CreateEmployee;
