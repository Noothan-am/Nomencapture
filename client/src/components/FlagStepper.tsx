import React from "react";
import { IoMdHome } from "react-icons/io";
import { TiFlag } from "react-icons/ti";
const styles = require("../styles/flag-stepper.module.css").default;

function FlagStepper({ handleNomenButtonClick, isDisabled, currentPage }: any) {
  // const handleNameSwitch = (currentName: any) => {
  //   console.log("clicked", currentName);
  // };

  return (
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
          <button
            disabled={isDisabled === 1}
            onClick={() => handleNomenButtonClick(3)}
          >
            <li>NOMEN 3</li>
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

export default FlagStepper;
