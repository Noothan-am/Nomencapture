import { StepButton } from "@mui/material";
import Step from "@mui/material/Step";
import Stepper from "@mui/material/Stepper";
import React, { useState } from "react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import { useAllUsersData } from "../../context/AdminContext";
import Rows from "../components/Rows";
import ClientFormFirstPage from "./ClientFormFirstPage";
import ClientFourthFormPage from "./ClientFourthFormPage";
import ClientSecondFormPage from "./ClientSecondFormPage";
import ClientThirdFormPage from "./ClientThirdFormPage";
import { useParams } from "react-router-dom";
import ClientAuditPage from "./ClientAuditPage";
import ClientAudioPage from "./ClientAudioPage";
import ClientReviewPage from "./ClientReviewPage";

const steps = [
  "Understand the basics",
  "The Foundation",
  "Target Audience",
  "Preference",
];

const styles = require("../../styles/forms.module.css").default;

function UserFormsData() {
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});
  const { allUsersData, allUserFeedbackData }: any = useAllUsersData();

  const { usermail }: any = useParams();

  const handleChangeCurrentPageToPrevious = () => {
    setCurrentFormPage((currentFormPage) => currentFormPage - 1);
  };

  const handleChangeCurrentPageToNext = () => {
    setCurrentFormPage((currentFormPage) => currentFormPage + 1);
  };

  const handleStep = (step: number) => () => {
    setCurrentFormPage(step + 1);
  };

  const currentPage = () => {
    if (allUsersData) {
      const userDetails = allUsersData[usermail];
      const userFeedbackData = allUserFeedbackData[usermail];
      console.log({ userFeedbackData });
      switch (currentFormPage) {
        case 1:
          return (
            <ClientFormFirstPage
              usermail={usermail}
              allUsersData={userDetails}
            />
          );
        case 2:
          return (
            <ClientSecondFormPage
              usermail={usermail}
              allUsersData={userDetails}
            />
          );
        case 3:
          return (
            <ClientThirdFormPage
              usermail={usermail}
              allUsersData={userDetails}
            />
          );
        case 4:
          return (
            <ClientFourthFormPage
              usermail={usermail}
              allUsersData={userDetails}
            />
          );
        case 5:
          return (
            <ClientAuditPage
              next={handleChangeCurrentPageToNext}
              allUserFeedbackData={userFeedbackData}
            />
          );
        case 6:
          return (
            <ClientAudioPage
              // next={handleChangeCurrentPageToNext}
              currentFormPage={currentFormPage}
              handleChangeCurrentPageToPrevious={
                handleChangeCurrentPageToPrevious
              }
              handleChangeCurrentPageToNext={handleChangeCurrentPageToNext}
              allUserFeedbackData={userFeedbackData}
            />
          );
        case 7:
          return (
            <ClientReviewPage
              // next={handleChangeCurrentPageToNext}
              allUserFeedbackData={userFeedbackData}
            />
          );
      }
    }
  };

  return (
    <>
      <div className={styles["client-forms"]}>
        <div className={styles["div"]}>
          <div className={currentFormPage !== 5 && styles["stepper"]}>
            {currentFormPage < 5 && (
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
            <div className={styles["forms-next-button"]}>
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
                {currentFormPage < 7 && (
                  <Button
                    buttonValue={"NEXT"}
                    handleClick={handleChangeCurrentPageToNext}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserFormsData;
