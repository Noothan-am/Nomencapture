import React from "react";
const styles = require("../styles/checkbox-questions.module.css").default;
function CheckBoxQuestions({ question, options }: any) {
  return (
    <>
      <div className={styles["select-questions"]}>
        <label htmlFor="">{question}</label>
        {options.map((option: string, index: number) => (
          <div className={styles["select-inputs"]} key={index}>
            <input type="checkbox" id={`${index}`} name="options" />
            <label htmlFor={`${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </>
  );
}

export default CheckBoxQuestions;
