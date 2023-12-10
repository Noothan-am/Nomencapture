import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";

const styles = require("../styles/final-greeting.module.css").default;

function FinalGreetings() {
  return (
    <>
      <div className={styles["review"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs />
            </SideBar>
          </div>
          <div className={styles["review-container"]}>
            <div className={styles["div"]}>
              <div className={styles["form-content"]}>
                <h1>
                  Thank you for your response. We will contact you shortly.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FinalGreetings;
