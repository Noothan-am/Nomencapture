import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import TextQuestions from "../components/TextQuestions";
import SelectQuestions from "../components/SelectQuestions";
import RadioQuestions from "../components/RadioQuestions";
import Button from "../components/Button";
import CheckBoxQuestions from "../components/CheckBoxQuestions";
const styles = require("../styles/forms.module.css").default;

function Forms() {
  return (
    <>
      <div className={styles["forms"]}>
        <div className="navbar">
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className="sidebar">
            <SideBar>
              <Tabs />
            </SideBar>
          </div>
          <div className="forms-container">
            <div className={styles["div"]}>
              <TextQuestions question={"Your Name"} />
              <SelectQuestions
                question={"Which sector does your product / service belong to?"}
              />
              <RadioQuestions />
              <CheckBoxQuestions />
            </div>
            <div className="forms-next-button">
              <Button buttonValue={"NEXT"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
