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
import { sendMailFromUser } from "../utils/mail";

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

  const giveKeysFromObject = async (data: any) => {
    return `${Object.keys(data)}`;
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
      brandNameScale,
      competitors,
      likedCompetitorNames,
      dislikedCompetitorNames,
      meaningAssociation,
      desiredAllure,
      nameIdeas,
      avoidedConnotations,
      blankImagination,
    } = getItem();

    const data = {
      Timestamp: new Date().toLocaleString(),
      "Your Name": name,
      "Your Email": email,
      "What are we naming?": naming["Others"]
        ? naming
        : await giveKeysFromObject(naming),
      "Which sector does your product / service belong to?": productSector,
      "Mention the Trademark classes your product/service belongs to?":
        trademark,
      "Describe your Product/Service?": productDescription,
      "Your favourite go to place for peace?": goToPlace,
      "What need does your product / service cater to?": productCater,
      "What do you think is the differentiating value you provide / What is your USP?":
        usp,
      "What price segment does your product/service fall in?":
        await giveKeysFromObject(productSegment),
      "Do you see yourself expanding to other cities/regions in future? If yes, where?":
        productExpansion,
      "What are the cities/regions you're planning to focus on?":
        productFocusOnCity,
      "If your product / service were a person, list the values or beliefs it will always stand by?":
        productValues,
      "What is the ultimate impact you want to create with your product / service? Or WHY does your product / service exist?":
        productImpact,
      "How do you think your product / service can achieve the above?":
        productAchievement,
      "If your product / service were a person, what kind of impact it would want to create?":
        productImpactAsPerson["Others"]
          ? productImpactAsPerson
          : await giveKeysFromObject(productImpactAsPerson),
      "What is the color of the dress you wore yesterday?": dressColor,
      "If your product / service were a person, how would you definitely like it to come across as?":
        await giveKeysFromObject(productLikeness),
      "If your product / service were a person, how would you definitely not like it to come across as?":
        await giveKeysFromObject(productUnLikeness),
      "What was the object you last took a photo of?": lastPhotoDetails,
      "What is the age bracket of your Target Audience Group (TG)?":
        await giveKeysFromObject(targetAudienceAge),
      "Which gender of TG is your product / service for?": targetAudienceGender[
        "Others"
      ]
        ? targetAudienceGender
        : await giveKeysFromObject(targetAudienceGender),
      "What occupation your TG may have?": await giveKeysFromObject(
        targetAudienceOccupation
      ),
      "How often do you think your product will be purchased?":
        await giveKeysFromObject(productPurchaseFrequency),
      "Where will your TG find your product / service?":
        await giveKeysFromObject(productAvailability),
      "How do want your customers to remember you as": await giveKeysFromObject(
        memorableImpression
      ),
      "Do you have any additional information about your TG?":
        targetAudienceInfo,
      "A hero you look upto?": hero,
      "For what values you want your TG to choose you over the competitor?":
        targetAudienceExpectation,
      "List your competitors (mention website links if available)": competitors,
      "Competitor/other brand names you like": likedCompetitorNames,
      "Competitor/other brand names you dislike": dislikedCompetitorNames,
      "What appeal do you want the name to have?": await giveKeysFromObject(
        desiredAllure
      ),
      "Emotions or ideas you want the name to evoke?": nameIdeas,
      "Connotations or ideas you want to completely avoid?":
        avoidedConnotations,
      "Choose one OR write the order of priority of what meaning-association would you prefer for the name?":
        await giveKeysFromObject(meaningAssociation),
      "Imagine you're painting. You have no reference and you're in an empty room with no window. What will you draw on your canvas?":
        blankImagination,
      "Clever / Straightforward": brandNameScale["Clever / Straightforward"],
      "Global / Local": brandNameScale["Global / Local"],
      "Modern / Traditional": brandNameScale["Modern / Traditional"],
      "Emotional / Logical": brandNameScale["Emotional / Logical"],
      "Scientific / General": brandNameScale["Scientific / General"],
      "Whimsical / Serious": brandNameScale["Whimsical / Serious"],
      "Mature / Youthful": brandNameScale["Mature / Youthful"],
      "Formal / Friendly": brandNameScale["Formal / Friendly"],
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
          sendMailFromUser()
            .then(() => {
              console.log("mail sent to user");
            })
            .catch((error) => {
              console.log("couldn't send mail to user", error);
            });
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
                        key={index}
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
