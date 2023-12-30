import React from "react";
const styles = require("../styles/text-questions.module.css").default;

const TextQuestions = ({ question, onInputChange }: any) => {
  const handleChange = (event: any) => {
    const value = event.target.value;
    onInputChange(value);
  };

  return (
    <>
      <div className={styles["text-questions"]}>
        <label htmlFor="">{question}</label>
        <input placeholder="Your Answer" onChange={handleChange} type="text" />
      </div>
    </>
  );
};

export default TextQuestions;
