import React from "react";
import { IoMdHome } from "react-icons/io";
import { TiFlag } from "react-icons/ti";
const styles = require("../styles/flag-stepper.module.css").default;

function FlagStepper({ handleNomenButtonClick }: any) {
  // const handleNameSwitch = (currentName: any) => {
  //   console.log("clicked", currentName);
  // };

  return (
    <div className={styles["flag-stepper"]}>
      <IoMdHome
        style={{
          color: "#000000",
        }}
        className={styles["home"]}
      />
      <div className={styles["nomen-sections"]}>
        <ul>
          <button onClick={() => handleNomenButtonClick(1)}>
            <li>NOMEN 1 /</li>
          </button>
          <button onClick={() => handleNomenButtonClick(2)}>
            <li>NOMEN 2 /</li>
          </button>
          <button onClick={() => handleNomenButtonClick(3)}>
            <li>NOMEN 3</li>
          </button>
        </ul>
      </div>
      <TiFlag className={styles["flag"]} />
    </div>
  );
}

export default FlagStepper;
