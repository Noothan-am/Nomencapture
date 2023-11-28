import React from "react";
const styles = require("../styles/radio-questions.module.css").default;

function RadioQuestions({ question }: any) {
  return (
    <>
      <div className={styles["select-questions"]}>
        <label htmlFor="">{question}</label>
        <input type="radio"></input>
      </div>
    </>
  );
}

export default RadioQuestions;
