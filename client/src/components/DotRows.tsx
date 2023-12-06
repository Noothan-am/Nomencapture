import React from "react";
const styles = require("../styles/dotsrow.module.css").default;

const DotsRow = () => {
  return (
    <div className={styles["dots-container"]}>
      <div className={styles["dots"]} />
      <div className={styles["dots"]} />
      <div className={styles["dots"]} />
      <div className={styles["dots"]} />
      <div className={styles["dots"]} />
    </div>
  );
};

export default DotsRow;
