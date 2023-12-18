import React from "react";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import { FaRegCirclePlay } from "react-icons/fa6";
const styles = require("../styles/your-name.module.css").default;

function YourName() {
  return (
    <>
      <div className="your-name">
        <div className={styles["content"]}>
          <div className={styles["top-part"]}>
            <h3>Congratulations, Samshritha!</h3>
            <ul>
              <li>Download PDF &#62;</li>
              <li>Request Domain Names &#62;</li>
              <li>Request Tademark &#62;</li>
              <li>Request Brand Identity &#62;</li>
            </ul>
          </div>
          <h1>Noover</h1>
          <div className={styles["alt"]}>
            <p>
              / noo-ver /
              <span>
                {" "}
                <FaRegCirclePlay style={{ marginBottom: "-.3rem" }} />
              </span>
            </p>
          </div>
          <p>
            Derived from the word Manoeuvre, the name captures the ideas of tact
            and how the dashboard helps the users ultimately achieve their goal
            by leveraging intelligent market insights. The name is quirky, easy
            to remember and unique.
          </p>
        </div>
      </div>
    </>
  );
}

export default YourName;
