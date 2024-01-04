import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import Button from "../components/Button";
import FormFirstPage from "./FormFirstPage";
import SecondFormPage from "./SecondFormPage";
import ThirdFormPage from "./ThirdFormPage";
import FourthFormPage from "./FourthFormPage";
import Thankyou from "./Thankyou";
// import { Step, Stepper } from "react-form-stepper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { StepButton } from "@mui/material";
import useFormData from "../context/FormContext";
import useLocalStorage from "../hooks/useLocalStorage";

const steps = [
  "Understand the basics",
  "The Foundation",
  "Target Audience",
  "Preference",
];
// const Stepper = require("react-stepper-horizontal");
// import TextQuestions from "../components/TextQuestions";
// import SelectQuestions from "../components/SelectQuestions";
// import RadioQuestions from "../components/RadioQuestions";
// import DescriptionQuestions from "../components/DescriptionQuestions";

// import CheckBoxQuestions from "../components/CheckBoxQuestions";
const styles = require("../styles/forms.module.css").default;

function Forms() {
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  const { form }: any = useFormData();
  const { setItem } = useLocalStorage();

  const handleChangeCurrentPageToNext = () => {
    setItem(form);
    setCurrentFormPage((currentFormPage) => currentFormPage + 1);
  };

  const handleChangeCurrentPageToPrevious = () => {
    setCurrentFormPage((currentFormPage) => currentFormPage - 1);
  };

  const handleStep = (step: number) => () => {
    setCurrentFormPage(step + 1);
  };

  const currentPage = () => {
    switch (currentFormPage) {
      case 1:
        return <FormFirstPage />;
      case 2:
        return <SecondFormPage />;
      case 3:
        return <ThirdFormPage />;
      case 4:
        return <FourthFormPage />;
      case 5:
        return <Thankyou />;
    }
  };

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/api/verify`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "include",
  //   })
  //     .then(() => {
  //       console.log("verified");
  //     })
  //     .catch(() => {
  //       console.log("not verified");
  //     });
  // }, []);

  return (
    <>
      <div className={styles["forms"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs show={1} />
            </SideBar>
          </div>
          <div className={styles["forms-container"]}>
            <div className={styles["div"]}>
              <div className={styles["stepper"]}>
                {currentFormPage !== 5 && (
                  <Stepper
                    style={{ color: "black" }}
                    activeStep={currentFormPage - 1}
                  >
                    {steps.map((label, index) => (
                      <Step
                        key={label}
                        style={{ color: "black" }}
                        completed={completed[index]}
                      >
                        <StepButton
                          style={{ color: "black" }}
                          onClick={handleStep(index)}
                        >
                          {label}
                        </StepButton>
                      </Step>
                    ))}
                  </Stepper>
                  // <Stepper nonLinear activeStep={currentFormPage - 1}>
                  //   {steps.map((label, index) => (
                  //     <Step key={label} completed={completed[index]}>
                  //       <StepButton color="inherit" onClick={handleStep(index)}>
                  //         {label}
                  //       </StepButton>
                  //       {/* <StepLabel>{label}</StepLabel> */}
                  //     </Step>
                  //   ))}
                  // </Stepper>
                )}
              </div>
              <div className={styles["form-content"]}>
                {currentPage()}
                <div
                  style={
                    currentFormPage == 5
                      ? { display: "none" }
                      : { display: "flex" }
                  }
                  className={styles["forms-next-button"]}
                >
                  <div
                    style={
                      currentFormPage == 1
                        ? { display: "none" }
                        : { display: "flex" }
                    }
                    className={styles["previous-btn"]}
                  >
                    <Button
                      buttonValue={"PREVIOUS"}
                      handleClick={handleChangeCurrentPageToPrevious}
                    />
                  </div>
                  <div className={styles["next-btn"]}>
                    <Button
                      buttonValue={"NEXT"}
                      handleClick={handleChangeCurrentPageToNext}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
