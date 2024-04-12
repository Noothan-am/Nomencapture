import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import FlagStepper from "../components/FlagStepper";
const loadingImg = require("../assets/images/Loading.png");
const styles = require("../styles/second-round-greeting.module.css").default;

function SecondRoundGreetings() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/second-round");
    }, 5000);
  }, [navigate]);

  return (
    <>
      <div className={styles["forms"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs show={3} />
            </SideBar>
          </div>
          <div className={styles["forms-container"]}>
            <div className={styles["div"]}>
              <div className={styles["stepper"]}>
                <FlagStepper
                  isDisabled={0}
                  currentPage={"feedback"}
                  totalNames={3}
                />
              </div>
              <div className={styles["form-content"]}>
                <div className={styles["SecondRoundGreetings"]}>
                  <img src={loadingImg} alt="" />
                  <h2>
                    Thank you for your response. We will contact you shortly.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondRoundGreetings;
