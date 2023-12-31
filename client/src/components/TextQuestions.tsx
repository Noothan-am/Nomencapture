import React, { useEffect, useState } from "react";
const styles = require("../styles/text-questions.module.css").default;

const TextQuestions = ({ question, onInputChange, value }: any) => {
  const handleChange = (event: any) => {
    const data = event.target.value;
    onInputChange(data);
  };

  return (
    <>
      <div className={styles["text-questions"]}>
        <label htmlFor="">{question}</label>
        <input
          placeholder="Your Answer"
          onChange={handleChange}
          value={value}
          type="text"
        />
      </div>
    </>
  );
};

export default TextQuestions;
