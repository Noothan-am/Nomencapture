import React, { useEffect, useState } from "react";
const styles = require("../styles/checkbox-questions.module.css").default;
function CheckBoxQuestions({ question, options, onInputChange, value }: any) {
  // const handleChange = (event: any) => {
  //   const data: any = event.target.value;
  //   onInputChange([value, data]);
  // };

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);
  const [checkedItems, setCheckedItems] = useState<any>({});

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
    onInputChange((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));

    console.log(checkedItems);
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
                onChange={(e) =>
                  // onInputChange({
                  //   [option]: value ? !value[option] : false,
                  // })
                  handleCheckboxChange(e)
                }
                id={`${index}`}
                name={`${option}`}
                value={option}
                checked={checkedItems.option}
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
