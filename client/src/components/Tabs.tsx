import React from "react";
import { IoIosLock } from "react-icons/io";
const styles = require("../styles/tabs.module.css").default;

function Tabs() {
  return (
    <>
      <div className={styles["tabs"]}>
        <div className={styles["tabs-1"]}>
          Naming Questionnaire
          <span>
            <IoIosLock />
          </span>
        </div>
        <div className={styles["tabs-2"]}>
          Audit & Observation
          <span>
            <IoIosLock />
          </span>
        </div>
        <div className={styles["tabs-2"]}>
          Our Understanding
          <span>
            <IoIosLock />
          </span>
        </div>
        <div className={styles["tabs-3"]}>
          Naming Set 1
          <span>
            <IoIosLock />
          </span>
        </div>
        <div className={styles["tabs-4"]}>
          Derivatives
          <span>
            <IoIosLock />
          </span>
        </div>
        <div className={styles["tabs-5"]}>
          Your Name
          <span>
            <IoIosLock />
          </span>
        </div>
      </div>
    </>
  );
}

export default Tabs;
