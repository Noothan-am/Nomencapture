import React from "react";
const styles = require("../styles/textarea-questions.module.css").default;

function DescriptionQuestions({ question, description }: any) {
  return (
    <>
      <div className={styles["textarea-questions"]}>
        <label htmlFor="">{question}</label>
        <p>{description}</p>
        <textarea></textarea>
      </div>
    </>
  );
}

export default DescriptionQuestions;
