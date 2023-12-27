import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import DotsRow from "../components/DotRows";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const styles = require("../styles/audit.module.css").default;

const Accordion = ({ title, content }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles["question"]} onClick={() => setIsActive(!isActive)}>
      <div className={styles["accordion-title"]}>
        {title}
        {isActive ? <RxCross2 /> : <FiPlus />}
      </div>
      {isActive && <p className="accordion-content">{content}</p>}
      <hr />
    </div>
  );
};

function AuditPage() {
  const navigate = useNavigate();
  const navigateToNamingSet = () => {
    navigate("/audio-page");
  };
  const accordionData = [
    {
      title: "How?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at?`,
    },
    {
      title: "Who?",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi,`,
    },
    {
      title: "Why?",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur`,
    },
    {
      title: "What?",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis,`,
    },
  ];
  return (
    <>
      <div className={styles["audit-page"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["audit-container"]}>
          <div className={styles["sidebar"]}>
            <SideBar>
              <Tabs show={2} />
            </SideBar>
          </div>
          <div className={styles["audit-content"]}>
            <div className={styles["audit-questions"]}>
              <div className={styles["audit-each-question"]}>
                {/* <div className={styles["question-how"]}>
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
                </div> */}
                {accordionData.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
                ))}
              </div>
            </div>
            <div className={styles["audit-rating"]}>
              <p className={styles["audit-rating-question"]}>
                On scale of 1-5, how aligned are you on this overall?
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
                <Button
                  handleClick={navigateToNamingSet}
                  buttonValue={"PROCEED"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuditPage;
