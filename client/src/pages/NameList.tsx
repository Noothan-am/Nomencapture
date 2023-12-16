import React from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import Button from "../components/Button";
const styles = require("../styles/name-list.module.css").default;

function NameList() {
  return (
    <>
      <div className={styles["name-list-2-container"]}>
        <div className={styles["heading"]}>
          <p>
            Can you find your potential{" "}
            <span>name among the adjacent players?</span>
          </p>
        </div>
        <div className={styles["nameset-2-names-img"]}>
          <img src="" alt="img for names" />
        </div>
        {/* <div className={styles["nameset-2-arrows"]}>
          <Button buttonValue={<FaLessThan />} />
          <Button buttonValue={<FaGreaterThan />} />
        </div> */}
      </div>
    </>
  );
}

export default NameList;
