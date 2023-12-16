import React from "react";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { BiLike, BiDislike } from "react-icons/bi";
import DotsRow from "../components/DotRows";

const styles = require("../styles/audit.module.css").default;

function AuditPage() {
  return (
    <>
      <div className={styles["audit-page"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["audit-container"]}>
          <div className={styles["sidebar"]}>
            <SideBar>
              <Tabs />
            </SideBar>
          </div>
          <div className={styles["audit-content"]}>
            <div className={styles["audit-questions"]}>
              <div className={styles["audit-each-question"]}>
                <div className={styles["question-what"]}>
                  What?
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo, commodi? Sunt nihil voluptatem repudiandae? Aspernatur
                    tempore quam soluta, ea voluptatum odit eveniet laudantium
                    dicta quas perferendis quibusdam alias. Pariatur,
                    consectetur?
                  </p>
                  <hr />
                </div>
                <div className={styles["question-how"]}>
                  How?
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo, commodi? Sunt nihil voluptatem repudiandae? Aspernatur
                    tempore quam soluta, ea voluptatum odit eveniet laudantium
                    dicta quas perferendis quibusdam alias. Pariatur,
                    consectetur?
                  </p>
                  <hr />
                </div>
                <div className={styles["question-who"]}>
                  Who?
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo, commodi? Sunt nihil voluptatem repudiandae? Aspernatur
                    tempore quam soluta, ea voluptatum odit eveniet laudantium
                    dicta quas perferendis quibusdam alias. Pariatur,
                    consectetur?
                  </p>
                  <hr />
                </div>
                <div className={styles["question-why"]}>
                  Why?
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nemo, commodi? Sunt nihil voluptatem repudiandae? Aspernatur
                    tempore quam soluta, ea voluptatum odit eveniet laudantium
                    dicta quas perferendis quibusdam alias. Pariatur,
                    consectetur?
                  </p>
                  <hr />
                </div>
              </div>
            </div>
            <div className={styles["audit-rating"]}>
              <p className={styles["audit-rating-question"]}>
                How aligned are you on this overall?
              </p>
              <div className={styles["audit-rating-bar"]}>
                <DotsRow />
              </div>
              <div className={styles["audit-comments-textarea"]}>
                <textarea
                  placeholder="COMMENTS"
                  id=""
                  cols={40}
                  rows={3}
                ></textarea>
              </div>
              <div className={styles["audit-comments-submit-btn"]}>
                <Button buttonValue={"SUBMIT"} />
              </div>
              <div className={styles["audit-rating-submit"]}>
                <Button buttonValue={"PROCEED"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuditPage;
