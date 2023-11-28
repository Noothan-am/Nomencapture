import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
const styles = require("../styles/forms.module.css").default;

function Forms() {
  return (
    <>
      <div className={styles["forms"]}>
        <div className="navbar">
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className="sidebar">
            <SideBar>
              <Tabs />
            </SideBar>
          </div>
          <div className="forms-container">
            <div className={styles["div"]}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
