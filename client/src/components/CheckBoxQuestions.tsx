import React from "react";
const styles = require("../styles/checkbox-questions.module.css").default;
function CheckBoxQuestions({ question, options }: any) {
  return (
    <>
      <div className={styles["checkbox-questions"]}>
        <label htmlFor="">{question}</label>
        <div className={styles["checkbox-options"]}>
          {options.map((option: string, index: number) => (
            <div className={styles["checkbox-inputs"]} key={index}>
              <input type="checkbox" id={`${index}`} name="options" />
              <label htmlFor={`${index}`}>{option}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CheckBoxQuestions;
