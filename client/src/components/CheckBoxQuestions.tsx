import React from "react";
const styles = require("../styles/checkbox-questions.module.css").default;
function CheckBoxQuestions({ question, options, onInputChange }: any) {
  let selectOptions: any = [];
  const handleChange = (event: any) => {
    const value = event.target.value;
    selectOptions.push(value);
    onInputChange(selectOptions);
  };
  return (
    <>
      <div className={styles["checkbox-questions"]}>
        <label htmlFor="">{question}</label>
        <div className={styles["checkbox-options"]}>
          {options.map((option: string, index: number) => (
            <div className={styles["checkbox-inputs"]} key={index}>
              <input
                type="checkbox"
                onChange={(e) => handleChange(e)}
                id={`${index}`}
                name="options"
                value={option}
              />
              <label htmlFor={`${index}`}>{option}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CheckBoxQuestions;
