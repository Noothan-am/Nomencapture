import React from "react";
const styles = require("../styles/checkbox-questions.module.css").default;
function CheckBoxQuestions({ question }: any) {
  return (
    <>
      <div className={styles["select-questions"]}>
        <label htmlFor="">{question}</label>
        <input type="checkbox" name="" id="" />
      </div>
    </>
  );
}

export default CheckBoxQuestions;
