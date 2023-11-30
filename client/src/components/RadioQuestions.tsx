import React from "react";
const styles = require("../styles/radio-questions.module.css").default;

function RadioQuestions({ question, options }: any) {
  return (
    <>
      <div className={styles["select-questions"]}>
        <label htmlFor="question">{question}</label>
        <span>
          {options.map((option: string, index: number) => (
            <div className={styles["select-inputs"]} key={index}>
              <input type="radio" id={`${index}`} name="options" />
              <label htmlFor={`${index}`}>{option}</label>
            </div>
          ))}
        </span>
      </div>
    </>
  );
}

export default RadioQuestions;
