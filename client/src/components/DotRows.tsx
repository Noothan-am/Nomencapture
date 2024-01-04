import React from "react";
const styles = require("../styles/dotsrow.module.css").default;

const DotsRow = ({ index, selectedDot, setSelectedDot }: any) => {
  const handleDotClick = (value: any) => {
    setSelectedDot({ ...selectedDot, [index]: value + 1 });
    console.log(selectedDot);
  };

  return (
    <div className={styles["dots-container"]}>
      {Array.from({ length: 5 }, (_, currentIndex) => (
        <div
          key={currentIndex}
          className={`${styles["dots"]} ${
            currentIndex < selectedDot[index] ? styles["highlighted"] : ""
          }`}
          onClick={() => handleDotClick(currentIndex)}
        />
      ))}
    </div>
  );
};

export default DotsRow;
