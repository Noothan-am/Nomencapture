import React, { useCallback, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import FormFirstPage from "./FormFirstPage";
import FourthFormPage from "./FourthFormPage";
import SecondFormPage from "./SecondFormPage";
import Thankyou from "./Thankyou";
import ThirdFormPage from "./ThirdFormPage";
import { StepButton } from "@mui/material";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useFormData from "../context/FormContext";
import useLocalStorage from "../hooks/useLocalStorage";
import { sendMailFromUser } from "../utils/mail";

const steps = [
  "Understand the basics",
  "The Foundation",
  "Target Audience",
  "Preference",
];

const styles = require("../styles/forms.module.css").default;

function Forms() {
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const { form }: any = useFormData();
  const { setItem, getItem } = useLocalStorage();
  const navigate = useNavigate();
  const checkBoxValidCheck = (data: any) => {
    return Object.keys(data).filter((key) => data[key]).length;
  };

  const checkFields = () => {
    switch (currentFormPage) {
      case 1:
        if (
          form.name &&
          form.name.trim() &&
          form.email &&
          form.email.trim() &&
          form.naming &&
          Object.keys(form.naming).length &&
          form.productSector &&
          form.productSector.trim() &&
          form.trademark &&
          form.trademark.trim() &&
          form.productDescription &&
          form.productDescription.trim() &&
          form.goToPlace &&
          form.goToPlace.trim()
        ) {
          return true;
        }
        break;
      case 2:
        if (
          form.usp &&
          form.usp.trim() &&
          form.dressColor &&
          form.dressColor.trim() &&
          form.productCater &&
          form.productCater.trim() &&
          form.productValues &&
          form.productValues.trim() &&
          form.productImpact &&
          form.productImpact.trim() &&
          form.productSegment &&
          Object.keys(form.productSegment).length &&
          form.productLikeness &&
          checkBoxValidCheck(form.productLikeness) &&
          form.productExpansion &&
          form.productExpansion.trim() &&
          form.lastPhotoDetails &&
          form.lastPhotoDetails.trim() &&
          form.productUnLikeness &&
          checkBoxValidCheck(form.productUnLikeness) &&
          form.productAchievement &&
          form.productAchievement.trim() &&
          form.productImpactAsPerson &&
          Object.keys(form.productImpactAsPerson).length &&
          form.productFocusOnCity &&
          form.productFocusOnCity.trim()
        ) {
          return true;
        }
        break;
      case 3:
        if (
          form.targetAudienceAge &&
          checkBoxValidCheck(form.targetAudienceAge) &&
          form.hero &&
          form.hero.trim() &&
          form.targetAudienceGender &&
          Object.keys(form.targetAudienceGender).length &&
          form.targetAudienceInfo &&
          form.targetAudienceInfo.trim() &&
          form.memorableImpression &&
          checkBoxValidCheck(form.memorableImpression) &&
          form.targetAudienceExpectation &&
          form.targetAudienceExpectation.trim() &&
          form.productAvailability &&
          checkBoxValidCheck(form.productAvailability) &&
          form.productPurchaseFrequency &&
          Object.keys(form.productPurchaseFrequency).length &&
          form.targetAudienceOccupation &&
          checkBoxValidCheck(form.targetAudienceOccupation)
        ) {
          return true;
        }
        break;
      case 4:
        if (
          form.brandNameScale &&
          Object.keys(form.brandNameScale).length &&
          form.competitors &&
          form.competitors.trim() &&
          form.likedCompetitorNames &&
          form.likedCompetitorNames.trim() &&
          form.dislikedCompetitorNames &&
          form.dislikedCompetitorNames.trim() &&
          form.meaningAssociation &&
          form.meaningAssociation.trim() &&
          form.desiredAllure &&
          Object.keys(form.desiredAllure).length &&
          form.nameIdeas &&
          form.nameIdeas.trim() &&
          form.avoidedConnotations &&
          form.avoidedConnotations.trim() &&
          form.blankImagination &&
          form.blankImagination.trim()
        ) {
          return true;
        }
        break;

      default:
        return false;
    }
  };

  const handleChangeCurrentPageToNext = () => {
    const isValid = checkFields();
    if (isValid) {
      const data = getItem();
      setItem({ ...data, ...form });
      setCurrentFormPage((currentFormPage) => currentFormPage + 1);
    } else {
      toast.error("Please fill all details", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleChangeCurrentPageToPrevious = () => {
    setCurrentFormPage((currentFormPage) => currentFormPage - 1);
  };

  const handleStep = (step: number) => () => {
    setCurrentFormPage(step + 1);
  };

  const giveKeysFromObject = async (data: any) => {
    return `${Object.keys(data).filter((key) => data[key])}`;
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
        : // : await giveKeysFromObject(naming),
          naming,
      "Which sector does your product / service belong to?": productSector,
      "Mention the Trademark classes your product/service belongs to?":
        trademark,
      "Describe your Product/Service?": productDescription,
      "Your favourite go to place for peace?": goToPlace,
      "What need does your product / service cater to?": productCater,
      "What do you think is the differentiating value you provide / What is your USP?":
        usp,
      "What price segment does your product/service fall in?":
        // await giveKeysFromObject(productSegment),
        productSegment,
      "What are the cities/regions you're planning to focus on?":
        productFocusOnCity,
      "Do you see yourself expanding to other cities/regions in future? If yes, where?":
        productExpansion,
      "If your product / service were a person, list the values or beliefs it will always stand by?":
        productValues,
      "What is the ultimate impact you want to create with your product / service? Or WHY does your product / service exist?":
        productImpact,
      "How do you think your product / service can achieve the above?":
        productAchievement,
      "If your product / service were a person, what kind of impact it would want to create?":
        productImpactAsPerson["Others"]
          ? productImpactAsPerson
          : // : await giveKeysFromObject(productImpactAsPerson),
            productAchievement,
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
        : // : await giveKeysFromObject(targetAudienceGender),
          targetAudienceGender,
      "What occupation your TG may have?": await giveKeysFromObject(
        targetAudienceOccupation
      ),
      "How often do you think your product will be purchased?":
        // await giveKeysFromObject(productPurchaseFrequency),
        productPurchaseFrequency,
      "Where will your TG find your product / service?":
        await giveKeysFromObject(productAvailability),
      "For what values you want your TG to choose you over the competitor?":
        targetAudienceExpectation,
      "How do want your customers to remember you as": await giveKeysFromObject(
        memorableImpression
      ),
      "Do you have any additional information about your TG?":
        targetAudienceInfo,
      "A hero you look upto?": hero,
      "Clever / Straightforward": brandNameScale["Clever / Straightforward"],
      "Global / Local": brandNameScale["Global / Local"],
      "Modern / Traditional": brandNameScale["Modern / Traditional"],
      "Emotional / Logical": brandNameScale["Emotional / Logical"],
      "Scientific / General": brandNameScale["Scientific / General"],
      "Whimsical / Serious": brandNameScale["Whimsical / Serious"],
      "Mature / Youthful": brandNameScale["Mature / Youthful"],
      "Formal / Friendly": brandNameScale["Formal / Friendly"],
      "List your competitors (mention website links if available)": competitors,
      "Competitor/other brand names you like": likedCompetitorNames,
      "Competitor/other brand names you dislike": dislikedCompetitorNames,
      "Choose one OR write the order of priority of what meaning-association would you prefer for the name?":
        meaningAssociation,
      "What appeal do you want the name to have?":
        // await giveKeysFromObject(
        // desiredAllure
        // ),
        desiredAllure,
      "Emotions or ideas you want the name to evoke?": nameIdeas,
      "Connotations or ideas you want to completely avoid?":
        avoidedConnotations,
      "Imagine you're painting. You have no reference and you're in an empty room with no window. What will you draw on your canvas?":
        blankImagination,
      Pricing: 2,
      "Name Given": "no",
      Captured: "yes",
    };

    const dataArray = [
      new Date().toLocaleString(),
      name,
      email,
      naming["Others"] ? JSON.stringify(naming) : JSON.stringify(naming),
      productSector,
      trademark,
      productDescription,
      goToPlace,
      productCater,
      usp,
      JSON.stringify(productSegment),
      productFocusOnCity,
      productExpansion,
      productValues,
      productImpact,
      productAchievement,
      productImpactAsPerson["Others"]
        ? JSON.stringify(productImpactAsPerson)
        : JSON.stringify(productAchievement),
      dressColor,
      await giveKeysFromObject(productLikeness),
      await giveKeysFromObject(productUnLikeness),
      lastPhotoDetails.toString(),
      await giveKeysFromObject(targetAudienceAge),
      targetAudienceGender["Others"]
        ? JSON.stringify(targetAudienceGender)
        : JSON.stringify(targetAudienceGender),
      await giveKeysFromObject(targetAudienceOccupation),
      JSON.stringify(productPurchaseFrequency),
      await giveKeysFromObject(productAvailability),
      targetAudienceExpectation,
      await giveKeysFromObject(memorableImpression),
      targetAudienceInfo.toString(),
      hero,
      brandNameScale["Clever / Straightforward"],
      brandNameScale["Global / Local"],
      brandNameScale["Modern / Traditional"],
      brandNameScale["Emotional / Logical"],
      brandNameScale["Scientific / General"],
      brandNameScale["Whimsical / Serious"],
      brandNameScale["Mature / Youthful"],
      brandNameScale["Formal / Friendly"],
      competitors,
      likedCompetitorNames,
      dislikedCompetitorNames,
      meaningAssociation,
      meaningAssociation,
      JSON.stringify(desiredAllure),
      nameIdeas,
      avoidedConnotations,
      blankImagination,
      2,
      "no",
      "yes",
    ];

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/set-form-data`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: dataArray,
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
    // const data: any = localStorage.getItem("userDetails");
    // const { name } = JSON.parse(data);
    const userData = JSON.parse(localStorage.getItem("userDetails") || "");
    const { name } = userData.user;

    if (currentFormPage === 5) {
      setFormDataToExcel()
        .then(() => {
          sendMailFromUser({
            userMailMessage:
              "Thankyou for filling the form we will get back to you in 2-3 working days",
            teamMailMessage: `${name} Has Filled the Form On ${new Date()}`,
          })
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

  return (
    <>
      <ToastContainer />
      <div className={styles["forms"]}>
        <ToastContainer />
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
