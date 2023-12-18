import React from "react";
const styles = require("../styles/text-questions.module.css").default;

const TextQuestions = ({ question }: any) => {
  return (
    <>
      <div className={styles["text-questions"]}>
        <label htmlFor="">{question}</label>
        <input placeholder="Your Answer" type="text" />
      </div>
    </>
  );
};

export default TextQuestions;
