import React, { useState } from "react";
const styles = require("../styles/checkbox-questions.module.css").default;
function CheckBoxQuestions({
  question,
  options,
  onInputChange,
  value,
  showSubHeading,
}: any) {
  const [checkedItems, setCheckedItems] = useState<any>({});

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      [name]: prevCheckedItems && prevCheckedItems[name] ? false : true,
    }));
    onInputChange((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      [name]: prevCheckedItems && prevCheckedItems[name] ? false : true,
    }));
  };

  return (
    <>
      <div className={styles["checkbox-questions"]}>
        <label htmlFor="">{question}</label>
        {showSubHeading && <p>Select TOP 3 that apply</p>}
        <div className={styles["checkbox-options"]}>
          {options.map((option: string, index: number) => (
            <div className={styles["checkbox-inputs"]} key={index}>
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e)}
                id={`${index}`}
                name={`${option}`}
                value={option}
                checked={value && value[option] ? value[option] : false}
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
