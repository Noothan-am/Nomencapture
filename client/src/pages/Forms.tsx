import React, { useCallback, useEffect, useState } from "react";
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
  const { setItem, getItem } = useLocalStorage();

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

  const setFormDataToExcel = useCallback(async () => {
    const {
      name,
      email,
      naming,
      productSector,
      trademark,
      productDescription,
      goToPlace,
      productCater,
      usp,
      productSegment,
      productExpansion,
      lastPhotoDetails,
      productLikeness,
      productUnLikeness,
      dressColor,
      productImpactAsPerson,
      productAchievement,
      productImpact,
      productValues,
      productFocusOnCity,
      targetAudienceAge,
      hero,
      targetAudienceGender,
      targetAudienceInfo,
      memorableImpression,
      targetAudienceExpectation,
      productAvailability,
      productPurchaseFrequency,
      targetAudienceOccupation,
    } = getItem();

    const data = {
      "Your Name": name,
      "Your Email": email,
      "What are we naming?": Object.keys(naming)[0],
      "Which sector does your product / service belong to?": productSector,
      "Mention the Trademark classes your product/service belongs to?":
        trademark,
      "Describe your Product/Service?": productDescription,
      "Your favourite go to place for peace?": goToPlace,
      "What need does your product / service cater to?": productCater,
      "What do you think is the differentiating value you provide / What is your USP? ":
        usp,
      "What price segment does your product/service fall in?": productSegment,
      "Do you see yourself expanding to other cities/states in future? If yes, where?":
        productExpansion,
      "What are the cities/states in India that you're planning to focus on?":
        productFocusOnCity,
      "If your product / service were a person, list the values or beliefs it will always stand by?":
        productValues,
      "What is the ultimate impact you want to create with your product / service? Or WHY does your product / service exist?":
        productImpact,
      "How do you think your product / service can achieve the above?":
        productAchievement,
      "If your product / service were a person, what kind of impact it would want to create?":
        productImpactAsPerson,
      "What is the color of the dress you wore yesterday?": dressColor,
      "If your product / service were a person, how would you definitely like it to come across as?":
        productLikeness,
      "If your product / service were a person, how would you definitely not like it to come across as?":
        productUnLikeness,
      "What was the object you last took a photo of?": lastPhotoDetails,
      "What is the age bracket of your Target Audience Group (TG) ?":
        targetAudienceAge,
      "Which gender of TG is your product / service for?": targetAudienceGender,
      "What occupation your TG may have?": targetAudienceOccupation,
      "How often do you think your product will be purchased?":
        productPurchaseFrequency,
      "Where will your TG find your product / service?": productAvailability,
      "How do want your customers to remember you as": memorableImpression,
      "Do you have any additional information about your TG?":
        targetAudienceInfo,
      "A hero you look upto?": hero,
      "What values your TG expects in this product segment?":
        targetAudienceExpectation,
    };

    try {
      const response = await fetch(
        "https://sheetdb.io/api/v1/9njehnbkbt0z9?sheet=form-responses",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                ...data,
              },
            ],
          }),
        }
      );
      if (response.ok) {
        console.log("Success");
      }
    } catch (error) {
      console.log(error);
    }
  }, [getItem]);

  const currentPage = () => {
    if (currentFormPage === 5) {
      setFormDataToExcel()
        .then(() => {
          console.log("Current page is 5");
        })
        .catch(() => {
          console.log("Error");
          return;
        });
    }
    switch (currentFormPage) {
      case 1:
        return <FormFirstPage />;
      case 2:
        return <SecondFormPage />;
      case 3:
        return <ThirdFormPage />;
      case 4:
        return <FourthFormPage />;
      // case 5:
      //   return <Thankyou />;
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
                    currentFormPage === 5
                      ? { display: "none" }
                      : { display: "flex" }
                  }
                  className={styles["forms-next-button"]}
                >
                  <div
                    style={
                      currentFormPage === 1
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
                      buttonValue={currentFormPage === 4 ? "SUBMIT" : "NEXT"}
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
