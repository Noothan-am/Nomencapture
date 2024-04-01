import { useState } from "react";
const styles = require("../styles/checkbox-questions.module.css").default;
function CheckBoxQuestions({
  question,
  options,
  onInputChange,
  value,
  showSubHeading,
}: any) {
  const [checkedItems, setCheckedItems] = useState<any>({});
  const [inputData, setInputData] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;

    // if (name === "Other") {
    //   if (!checked) {
    //     setInputData("");
    //   }
    setCheckedItems((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      [name]:
        prevCheckedItems && prevCheckedItems[name]
          ? prevCheckedItems[name]
          : checked,
    }));
    onInputChange((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
    setShowInput(checked);
    // } else {
    //   setCheckedItems((prevCheckedItems: any) => ({
    //     ...prevCheckedItems,
    //     [name]: checked,
    //   }));
    //   onInputChange((prevCheckedItems: any) => ({
    //     ...prevCheckedItems,
    //     [name]: checked,
    //   }));
    // }
  };

  const handleOtherCheckboxChange = (e: any) => {
    setInputData(e.target.value);
    setCheckedItems((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      Other: e.target.value,
    }));
    onInputChange((prevCheckedItems: any) => ({
      ...prevCheckedItems,
      Other: e.target.value,
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
              {/* {option === "Other" ? (
                <>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckboxChange(e)}
                    id={`${index}`}
                    name={`${option}`}
                    value={option}
                    checked={checkedItems["Other"]}
                  />
                  <label style={{ marginRight: "2px" }} htmlFor={`${index}`}>
                    {option}
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => handleOtherCheckboxChange(e)}
                    value={inputData}
                    disabled={!showInput}
                  />
                </>
              ) : ( */}
              <>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e)}
                  id={`${option}`}
                  name={`${option}`}
                  value={option}
                  checked={value && value[option] ? value[option] : false}
                />
                <label htmlFor={`${index}`}>{option}</label>
              </>
              {/* )} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CheckBoxQuestions;
