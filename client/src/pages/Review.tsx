import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import SelectQuestions from "../components/SelectQuestions";
import Button from "../components/Button";
import DotsRow from "../components/DotRows";

const styles = require("../styles/review.module.css").default;

const NamesFeedBack = () => {
  return (
    <>
      <div className="names-feedback">
        <h1>Unavanu</h1>
        <p>How aligned are you on this overall?</p>
        <div className={styles["audit-rating-bar"]}>
          <DotsRow />
        </div>
        <div className="feedback-input">
          <label htmlFor="">Suggestion/Feedback</label>
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default function Review() {
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
                <div className="first-part">
                  <NamesFeedBack />
                  <NamesFeedBack />
                  <NamesFeedBack />
                </div>
                <div className="second-part">
                  <div className="top-part">
                    <SelectQuestions
                      question={"Which one you like the most"}
                      options={["name 1", "name 2", "name 3"]}
                    />
                    <div className="second-question">
                      <div className="question">
                        <p>Are you completely satisfied with the name?</p>
                      </div>
                      <div className="options">
                        <p>Yes</p>
                        <p>No</p>
                      </div>
                    </div>
                    <div className="third-question">
                      <div className="question">
                        <p>Do you prefer another round?</p>
                      </div>
                      <div className="options">
                        <p>Yes</p>
                        <p>No</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="third-part">
                  <input type="text" placeholder="Elaborate" name="" id="" />
                  <Button buttonValue={"Submit"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
