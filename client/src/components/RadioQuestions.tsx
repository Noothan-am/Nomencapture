import React from "react";
const styles = require("../styles/radio-questions.module.css").default;

function RadioQuestions({ question, options, showOthersInput }: any) {
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
        {showOthersInput && (
          <>
            <div className={styles["select-inputs"]} key={10}>
              <input type="radio" name="options" />
              <label>{"Others"}</label>
            </div>
            <input type="text" name="" id="" />
          </>
        )}
      </div>
    </>
  );
}

export default RadioQuestions;
