import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import { FaRegCirclePlay } from "react-icons/fa6";
import Button from "../components/Button";
import { FaGreaterThan } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FlagStepper from "../components/FlagStepper";
const styles = require("../styles/your-name.module.css").default;

function YourName() {
  const [currentFormPage, setCurrentFormPage] = useState(4);

  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate("/final-greeting");
  };

  return (
    <>
      <div className={styles["naming-set"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs show={currentFormPage >= 3 ? currentFormPage + 1 : 3} />
            </SideBar>
          </div>
          {/* <div className={styles["naming-set-container"]}> */}
          <div className={styles["div"]}>
            <FlagStepper />
            <div className={styles["form-content"]}>
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
                  Derived from the word Manoeuvre, the name captures the ideas
                  of tact and how the dashboard helps the users ultimately
                  achieve their goal by leveraging intelligent market insights.
                  The name is quirky, easy to remember and unique.
                </p>
              </div>
            </div>
            <div className={styles["nameset-2-arrows"]}>
              <Button
                handleClick={handleNextButtonClick}
                buttonValue={<FaGreaterThan />}
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default YourName;
