import React from "react";
import { IoMdHome } from "react-icons/io";
import { TiFlag } from "react-icons/ti";
const styles = require("../styles/second-stepper.module.css").default;

function SecondroundStepper() {
  return (
    <div className={styles["flag-stepper"]}>
      <div className={styles["nomen-sections"]}>
        <ul>
          <button>
            <li>DERIV 1 /</li>
          </button>
          <button>
            <li>DERIV 2 /</li>
          </button>
        </ul>
      </div>
      <TiFlag className={styles["flag"]} />
    </div>
  );
}

export default SecondroundStepper;
