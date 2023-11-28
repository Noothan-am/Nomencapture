import React from "react";
const styles = require("../styles/tabs.module.css").default;

function Tabs() {
  return (
    <>
      <div className={styles["tabs"]}>
        <div className={styles["tabs-1"]}>Naming Questionnaire</div>
        <div className={styles["tabs-2"]}>Audit & Observation</div>
        <div className={styles["tabs-3"]}>Naming Set 1</div>
        <div className={styles["tabs-4"]}>Derivatives</div>
        <div className={styles["tabs-5"]}>Your Name</div>
      </div>
    </>
  );
}

export default Tabs;
