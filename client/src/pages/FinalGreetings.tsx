import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
const loadingImg = require("../assets/images/Loading.png");

const styles = require("../styles/final-greeting.module.css").default;

function FinalGreetings() {
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

export default FinalGreetings;
