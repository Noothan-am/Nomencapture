import React from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import AudioPage from "./AudioPage";
import NameList from "./NameList";

const styles = require("../styles/naming-set.module.css").default;

function NamingSet() {
  return (
    <>
      <div className={styles["naming-set"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs />
            </SideBar>
          </div>
          <div className={styles["naming-set-container"]}>
            <div className={styles["div"]}>
              {/* <div className={styles["forms-tabs"]}>.</div> */}
              <div className={styles["form-content"]}>{<NameList />}</div>
              {/* <div
                style={
                  currentFormPage == 12
                    ? { display: "none" }
                    : { display: "flex" }
                }
                className={styles["forms-next-button"]}
              >
                <div className={styles["previous-btn"]}>
                  <Button
                    buttonValue={"PREVIOUS"}
                    handleClick={handleChangeCurrentPageToPrevious}
                  />
                </div>
                <div className={styles["next-btn"]}>
                  <Button
                    buttonValue={"NEXT"}
                    handleClick={handleChangeCurrentPageToNext}
                  />
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NamingSet;
