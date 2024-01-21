import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import NameList from "./NameList";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Button from "../components/Button";
import YourName from "./YourName";
import Review from "./Review";
import Nomen from "./Nomen";
import FinalGreetings from "./FinalGreetings";
import { useNavigate } from "react-router-dom";
import FlagStepper from "../components/FlagStepper";

const styles = require("../styles/naming-set.module.css").default;

function NamingSet() {
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [currentData, setCurrentData] = useState(1);

  const navigate = useNavigate();
  const handleNomenButtonClick = (number: any) => {
    setCurrentData(number);
  };

  const handleNextButtonClick = () => {
    setCurrentFormPage(currentFormPage + 1);
  };

  const handlePreviousButtonClick = () => {
    setCurrentFormPage(currentFormPage - 1);
  };
  useEffect(() => {
    console.log(currentData);
  }, [currentData]);

  const currentPage = () => {
    switch (currentFormPage) {
      case 1:
        return <NameList />;
      case 2:
        return <Nomen currentData={currentData} />;
      case 3:
        navigate("/review");
        return;
      // case 4:
      //   return <YourName />;
      // case 5:
      //   return <FinalGreetings />;
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
              <Tabs show={currentFormPage >= 3 ? currentFormPage + 1 : 3} />
            </SideBar>
          </div>
          <div className={styles["naming-set-container"]}>
            <div className={styles["div"]}>
              <FlagStepper handleNomenButtonClick={handleNomenButtonClick} />
              <div className={styles["form-content"]}>{currentPage()}</div>
              <div
                style={{
                  display: currentFormPage === 5 ? "none" : "flex",
                }}
                className={styles["nameset-2-arrows"]}
              >
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
