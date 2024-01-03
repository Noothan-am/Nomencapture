import React, { useState } from "react";
const styles = require("../styles/radio-questions.module.css").default;

function RadioQuestions({
  question,
  options,
  showOthersInput,
  onInputChange,
  value,
}: any) {
  const [inputValue, setInputValue] = useState("Product");
  const [othersInputValue, setOthersInputValue] = useState("");

  const handleChange = (event: any) => {
    const data = event.target.value;
    setOthersInputValue("");
    onInputChange({ [data]: "" });
  };

  const handleOthersChange = (event: any) => {
    const data = event.target.value;
    onInputChange({ Others: othersInputValue });
  };

  return (
    <>
      <div className={styles["select-questions"]}>
        <label htmlFor="question">{question}</label>
        <span>
          {options.map((option: string, index: number) => (
            <div className={styles["select-inputs"]} key={index}>
              <input
                type="radio"
                id={`${index}`}
                name="options"
                onChange={(e) => {
                  setInputValue(e.target.value);
                  handleChange(e);
                }}
                value={option}
              />
              <label htmlFor={`${index}`}>{option}</label>
            </div>
          ))}
        </span>
        {showOthersInput && (
          <>
            <div className={styles["select-inputs"]} key={10}>
              <input
                onChange={(e) => {
                  setInputValue(e.target.value);
                  handleOthersChange(e);
                }}
                type="radio"
                name="options"
                value="Others"
              />
              <label>Others</label>
            </div>
            <input
              onChange={(e) => {
                setOthersInputValue(e.target.value);
                handleOthersChange(e);
              }}
              value={othersInputValue}
              disabled={inputValue.trim() !== "Others"}
              type="text"
              name=""
              id=""
            />
          </>
        )}
      </div>
    </>
  );
}

export default RadioQuestions;
