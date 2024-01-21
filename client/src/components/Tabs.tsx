import React from "react";
import { IoIosLock } from "react-icons/io";
const styles = require("../styles/tabs.module.css").default;

function Tabs({ show }: any) {
  return (
    <>
      <div className={styles["tabs"]}>
        <div className={styles[show === 1 ? "tabs-1" : "tabs-5"]}>
          Naming Questionnaire
          <span style={show >= 1 ? { display: "none" } : { display: "inline" }}>
            <IoIosLock />
          </span>
        </div>
        <div className={styles[show === 2 ? "tabs-1" : "tabs-5"]}>
          Audit & Observation
          <span>
            <IoIosLock
              style={show > 2 ? { display: "none" } : { display: "inline" }}
            />
          </span>
        </div>
        <div className={styles[show === 3 ? "tabs-1" : "tabs-5"]}>
          Naming Set 1
          <span>
            <IoIosLock
              style={show > 3 ? { display: "none" } : { display: "inline" }}
            />
          </span>
        </div>
        <div className={styles[show === 4 ? "tabs-1" : "tabs-5"]}>
          Derivatives
          <span>
            <IoIosLock
              style={show > 4 ? { display: "none" } : { display: "inline" }}
            />
          </span>
        </div>
        <div className={styles[show === 5 ? "tabs-1" : "tabs-5"]}>
          Your Name
          <span>
            <IoIosLock
              style={show > 5 ? { display: "none" } : { display: "inline" }}
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default Tabs;
