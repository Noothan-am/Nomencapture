import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import NameList from "./NameList";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Button from "../components/Button";
import YourName from "./YourName";
import Review from "./Review";
import Nomen from "./Nomen";

const styles = require("../styles/naming-set.module.css").default;

function NamingSet() {
  const [currentFormPage, setCurrentFormPage] = useState(1);

  const handleNextButtonClick = () => {
    setCurrentFormPage(currentFormPage + 1);
  };

  const handlePreviousButtonClick = () => {
    setCurrentFormPage(currentFormPage - 1);
  };
  const currentPage = () => {
    switch (currentFormPage) {
      case 1:
        return <NameList />;
      case 2:
        return <Nomen />;
      case 3:
        return <Review />;
      case 4:
        return <YourName />;
      // case 5:
      // return <Fi />;
    }
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
              <Tabs />
            </SideBar>
          </div>
          <div className={styles["naming-set-container"]}>
            <div className={styles["div"]}>
              <div className={styles["form-content"]}>{currentPage()}</div>
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
              <div className={styles["nameset-2-arrows"]}>
                <Button
                  handleClick={handlePreviousButtonClick}
                  buttonValue={<FaLessThan />}
                />
                <Button
                  handleClick={handleNextButtonClick}
                  buttonValue={<FaGreaterThan />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NamingSet;
