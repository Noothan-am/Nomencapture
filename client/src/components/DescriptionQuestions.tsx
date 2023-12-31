import React from "react";
const styles = require("../styles/textarea-questions.module.css").default;

function DescriptionQuestions({
  question,
  description,
  onInputChange,
  value,
}: any) {
  const handleChange = (event: any) => {
    const data = event.target.value;
    onInputChange(data);
  };
  return (
    <>
      <div className={styles["textarea-questions"]}>
        <label htmlFor="">{question}</label>
        <i>{description}</i>
        <textarea
          rows={6}
          cols={50}
          value={value}
          placeholder="Your Answer"
          onChange={handleChange}
        ></textarea>
      </div>
    </>
  );
}

export default DescriptionQuestions;
