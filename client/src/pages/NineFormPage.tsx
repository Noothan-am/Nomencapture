import React from "react";
import DescriptionQuestions from "../components/DescriptionQuestions";
import CheckBoxQuestions from "../components/CheckBoxQuestions";
import RadioQuestions from "../components/RadioQuestions";
import Circle from "../components/Circle";
const styles = require("../styles/forms.module.css").default;

function SecondFormPage() {
  return (
    <>
      <div className={styles["firstpart-9"]}>
        <div className={styles["radio"]}>
          <Circle
            question={"Clever / Straightforward"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Clever"}
            finalText={"Straightforward"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Formal / Friendly"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Formal"}
            finalText={"Friendly"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Emotional / Logical"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Emotional"}
            finalText={"Logical"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Whimsical / Serious"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Whimsical"}
            finalText={"Serious"}
          />
        </div>
      </div>
      <div className={styles["secondpart-9"]}>
        <div className={styles["radio"]}>
          <Circle
            question={"Global / Local"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Global"}
            finalText={"Local"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Modern / Traditional"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Modern"}
            finalText={"Traditional"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Scientific / General"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Scientific"}
            finalText={"General"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Mature / Youthful"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Mature"}
            finalText={"Youthful"}
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
