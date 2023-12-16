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
      <div className={styles["names-feedback"]}>
        <h1>Unavanu</h1>
        <p>How aligned are you on this overall?</p>
        <div className={styles["audit-rating-bar"]}>
          <DotsRow />
        </div>
        <div className={styles["feedback-input"]}>
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
      {/* <div className={styles["review"]}>
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
            <div className={styles["div"]}> */}
      <div className={styles["form-content"]}>
        <div className={styles["first-part"]}>
          <NamesFeedBack />
          <NamesFeedBack />
          <NamesFeedBack />
        </div>
        <div className={styles["second-part"]}>
          <div className={styles["top-part"]}>
            <div className={styles["select"]}>
              <SelectQuestions
                question={"Which one you like the most"}
                options={["name 1", "name 2", "name 3"]}
              />
            </div>
            <div className={styles["second-question"]}>
              <div className={styles["question"]}>
                <p>Are you completely satisfied with the name?</p>
              </div>
              <div className={styles["options"]}>
                <p>Yes</p>
                <p>No</p>
              </div>
            </div>
            <div className={styles["third-question"]}>
              <div className={styles["question"]}>
                <p>Do you prefer another round?</p>
              </div>
              <div className={styles["options"]}>
                <p>Yes</p>
                <p>No</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["third-part"]}>
          <input type="text" placeholder="Elaborate" name="" id="" />
          <div className={styles["btn"]}>
            <Button buttonValue={"Submit"} />
          </div>
        </div>
      </div>
      {/* </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
