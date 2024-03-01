import React from "react";
const styles = require("../styles/dotsrow.module.css").default;

const DotsRow = ({ index, selectedDot, setSelectedDot, disabled }: any) => {
  const handleDotClick = (value: any) => {
    setSelectedDot({ ...selectedDot, [index]: value + 1 });
  };
  return (
    <div className={styles["dots-container"]}>
      {Array.from({ length: 5 }, (_, currentIndex) => (
        <button
          disabled={disabled}
          key={currentIndex}
          className={`${styles["dots"]} ${
            currentIndex < selectedDot[index] ? styles["highlighted"] : ""
          }`}
          value={selectedDot && selectedDot[index]}
          onClick={() => handleDotClick(currentIndex)}
        />
      ))}
    </div>
  );
};

export default DotsRow;
