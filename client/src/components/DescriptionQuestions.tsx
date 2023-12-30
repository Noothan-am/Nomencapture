import React from "react";
const styles = require("../styles/textarea-questions.module.css").default;

function DescriptionQuestions({ question, description, onInputChange }: any) {
  const handleChange = (event: any) => {
    const value = event.target.value;
    onInputChange(value);
  };
  return (
    <>
      <div className={styles["textarea-questions"]}>
        <label htmlFor="">{question}</label>
        <i>{description}</i>
        <textarea
          rows={6}
          cols={50}
          placeholder="Your Answer"
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
}

export default DescriptionQuestions;
