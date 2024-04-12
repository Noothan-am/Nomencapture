import React from "react";
const styles = require("../styles/select-questions.module.css").default;

function SelectQuestions({
  question,
  options,
  onInputChange,
  value,
  disabled,
}: any) {
  const handleChange = (event: any) => {
    const value = event.target.value;
    onInputChange(value);
  };
  console.log({ value });

  return (
    <>
      <div className={styles["select-questions"]}>
        <label htmlFor="">{question}</label>
        <select disabled={disabled} onChange={(e) => handleChange(e)}>
          <option>Choose</option>
          {options.map((option: string, index: number) => {
            return (
              <option selected={value === option} key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default SelectQuestions;
