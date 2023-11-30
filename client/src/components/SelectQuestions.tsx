import React from "react";
const styles = require("../styles/select-questions.module.css").default;

function SelectQuestions({ question, options }: any) {
  return (
    <>
      <div className={styles["select-questions"]}>
        <label htmlFor="">{question}</label>
        <select>
          <option value="Choose">Choose</option>
          {options.map((option: string) => {
            return <option value="Hello">{option}</option>;
          })}
        </select>
      </div>
    </>
  );
}

export default SelectQuestions;
