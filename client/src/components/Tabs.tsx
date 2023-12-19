import React from "react";
import { IoIosLock } from "react-icons/io";
const styles = require("../styles/tabs.module.css").default;

function Tabs({ show }: any) {
  return (
    <>
      <div className={styles["tabs"]}>
        <div className={styles[show == 1 ? "tabs-1" : "tabs-5"]}>
          Naming Questionnaire
          <span>
            <IoIosLock />
          </span>
        </div>
        <div className={styles[show == 2 ? "tabs-1" : "tabs-5"]}>
          Audit & Observation
          <span>
            <IoIosLock />
          </span>
        </div>
        <div className={styles[show == 3 ? "tabs-1" : "tabs-5"]}>
          Naming Set 1
          <span>
            <IoIosLock />
          </span>
        </div>
        <div className={styles[show == 4 ? "tabs-1" : "tabs-5"]}>
          Derivatives
          <span>
            <IoIosLock />
          </span>
        </div>
        <div className={styles[show == 5 ? "tabs-1" : "tabs-5"]}>
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
