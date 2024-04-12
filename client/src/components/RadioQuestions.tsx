import React, { useState } from "react";
const styles = require("../styles/radio-questions.module.css").default;

function RadioQuestions({
  question,
  options,
  showOthersInput,
  onInputChange,
  value,
  disabled,
}: any) {
  const [inputValue, setInputValue] = useState("");
  const [othersInputValue, setOthersInputValue] = useState("");

  const handleChange = (event: any) => {
    const data = event.target.value;
    setOthersInputValue("");
    onInputChange({ [data]: "" });
  };

  const handleOthersChange = (event: any) => {
    onInputChange({ Others: event.target.value });
    setOthersInputValue(event.target.value);
  };

  console.log({ value });

  return (
    <>
      <div className={styles["select-questions"]}>
        <label htmlFor="question">{question}</label>
        <span>
          {options.map((option: string, index: number) => (
            <div className={styles["select-inputs"]} key={index}>
              <input
                type="radio"
                id={`${question}`}
                name={question}
                checked={value && Object.keys(value)[0] === option}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  handleChange(e);
                }}
                disabled={disabled}
                value={option}
              />
              <label aria-disabled htmlFor={`${index}`}>
                {option}
              </label>
            </div>
          ))}
        </span>
        {showOthersInput && (
          <>
            <div className={styles["select-inputs"]} key={10}>
              <input
                id={`${question}`}
                onChange={(e) => {
                  setInputValue("Others");
                  handleOthersChange(e);
                }}
                type="radio"
                value={""}
                name={question}
                disabled={disabled}
                checked={value && Object.keys(value)[0] === "Others"}
              />
              <label>Others</label>
            </div>
            {(inputValue.trim() === "Others" || (value && value["Others"])) && (
              <input
                onChange={(e) => {
                  setOthersInputValue(e.target.value);
                  handleOthersChange(e);
                }}
                value={value["Others"] ? value["Others"] : ""}
                type="text"
                disabled={disabled}
                name={question}
                id=""
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default RadioQuestions;
