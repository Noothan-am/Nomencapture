import React from "react";
import { IoMdHome } from "react-icons/io";
import { TiFlag } from "react-icons/ti";
const styles = require("../styles/second-stepper.module.css").default;

function SecondroundStepper({
  handleNomenButtonClick,
  isDisabled,
  currentPage,
}: any) {
  return (
    // <div className={styles["flag-stepper"]}>
    //   <div className={styles["nomen-sections"]}>
    //     <ul>
    //       <button onClick={() => handleNomenButtonClick(1)}>
    //         <li>DERIV 1 /</li>
    //       </button>
    //       <button onClick={() => handleNomenButtonClick(2)}>
    //         <li>DERIV 2 /</li>
    //       </button>
    //     </ul>
    //   </div>
    //   <TiFlag className={styles["flag"]} />
    // </div>
    <div className={styles["flag-stepper"]}>
      <IoMdHome
        style={
          currentPage === "Home"
            ? { color: "#000000" }
            : { color: "rgba(31, 31, 32, 0.658)" }
        }
        className={styles["home"]}
      />
      <div className={styles["nomen-sections"]}>
        <ul>
          <button
            disabled={isDisabled === 1}
            onClick={() => handleNomenButtonClick(1)}
          >
            <li>NOMEN 1 /</li>
          </button>
          <button
            disabled={isDisabled === 1}
            onClick={() => handleNomenButtonClick(2)}
          >
            <li>NOMEN 2 /</li>
          </button>
        </ul>
      </div>
      <TiFlag
        style={
          currentPage === "Final"
            ? { color: "#000000" }
            : { color: "rgba(31, 31, 32, 0.658)" }
        }
        className={styles["flag"]}
      />
    </div>
  );
}

export default SecondroundStepper;
