import React from "react";
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
// import CheckBoxQuestions from "../components/CheckBoxQuestions";
const styles = require("../styles/forms.module.css").default;

function Forms() {
  return (
    <>
      <div className={styles["forms"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar>
              <Tabs />
            </SideBar>
          </div>
          <div className={styles["forms-container"]}>
            <div className={styles["div"]}>
              <div className={styles["form-content"]}>
                <FormFirstPage />
                {/* <SecondFormPage /> */}
                {/* <ThirdFormPage /> */}
              </div>
              <div className={styles["forms-next-button"]}>
                <Button buttonValue={"NEXT"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
