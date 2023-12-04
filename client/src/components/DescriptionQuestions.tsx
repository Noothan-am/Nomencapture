import React from "react";
const styles = require("../styles/textarea-questions.module.css").default;

function DescriptionQuestions({ question, description }: any) {
  return (
    <>
      <div className={styles["textarea-questions"]}>
        <label htmlFor="">{question}</label>
        <i>{description}</i>
        <textarea rows={6} cols={50} placeholder="Your Answer"></textarea>
      </div>
    </>
  );
}

export default DescriptionQuestions;
