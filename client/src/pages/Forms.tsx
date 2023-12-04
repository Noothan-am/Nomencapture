import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
// import TextQuestions from "../components/TextQuestions";
// import SelectQuestions from "../components/SelectQuestions";
// import RadioQuestions from "../components/RadioQuestions";
// import DescriptionQuestions from "../components/DescriptionQuestions";
import Button from "../components/Button";
import FormFirstPage from "./FormFirstPage";
import SecondFormPage from "./SecondFormPage";
import ThirdFormPage from "./ThirdFormPage";
import FourthFormPage from "./FourthFormPage";
import FifthFormPage from "./FifthFormPage";
import SixthFormPage from "./SixthFormPage";
import SeventhFormPage from "./SeventhFormPage";
import EighthFormPage from "./EighthFormPage";
import NineFormPage from "./NineFormPage";
import TenthFormPage from "./TenthFormPage";
import Circle from "../components/Circle";
import EleventhFormPage from "./EleventhFormPage";
import Thankyou from "./Thankyou";
// import CheckBoxQuestions from "../components/CheckBoxQuestions";
const styles = require("../styles/forms.module.css").default;

function Forms() {
  const [currentFormPage, setCurrentFormPage] = useState(1);

  const handleChangeCurrentPageToNext = () => {
    setCurrentFormPage((currentFormPage) => currentFormPage + 1);
  };

  const handleChangeCurrentPageToPrevious = () => {
    setCurrentFormPage((currentFormPage) => currentFormPage - 1);
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
        return <FifthFormPage />;
      case 6:
        return <SixthFormPage />;
      case 7:
        return <SeventhFormPage />;
      case 8:
        return <EighthFormPage />;
      case 9:
        return <NineFormPage />;
      case 10:
        return <TenthFormPage />;
      case 11:
        return <EleventhFormPage />;
      case 12:
        return <Thankyou />;
    }
  };
  return (
    <>
      <div className={styles["forms"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs />
            </SideBar>
          </div>
          <div className={styles["forms-container"]}>
            <div className={styles["div"]}>
              {/* <div className={styles["forms-tabs"]}>.</div> */}
              <div className={styles["form-content"]}>{currentPage()}</div>
              <div
                style={
                  currentFormPage == 12
                    ? { display: "none" }
                    : { display: "flex" }
                }
                className={styles["forms-next-button"]}
              >
                <div className={styles["previous-btn"]}>
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
    </>
  );
}

export default Forms;
