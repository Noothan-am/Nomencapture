import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
const styles = require("../styles/naming-set-2.module.css").default;

function NamingSet2() {
  return (
    <>
      <div className={styles["namingset-2"]}>
        <div className={styles["namingset-2-navbar"]}>
          <Navbar />
        </div>
        <div className={styles["namingset-2-hero"]}>
          <div className={styles["naming-2-set-sidebar"]}>
            <SideBar>
              <Tabs />
            </SideBar>
          </div>
          <div className={styles["namingset-2-container"]}>
            <div className={styles["heading"]}>
              <p>
                Can you find your potential{" "}
                <span>name among the adjacent players?</span>
              </p>
            </div>
            <div className="nameset-2-names-img">
              <img src="" alt="img for names" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NamingSet2;
