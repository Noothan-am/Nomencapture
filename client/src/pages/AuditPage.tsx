import React, { useState, useEffect, useCallback } from "react";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import DotsRow from "../components/DotRows";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import client from "../utils/sanity-client";

const styles = require("../styles/audit.module.css").default;

const Accordion = ({ title, content }: any) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => console.log(title, content, []));
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
  const [accordion, setAccordion] = useState([]);
  const [selectedDot, setSelectedDot] = useState([]);
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();
  const navigateToNamingSet = () => {
    navigate("/audio-page");
  };
  const query =
    '*[_type == "AuditPage" && User->Name == "Noothan"]{ Title1 {question,description},Title2 {question,description}, Title3 {question,description},Title4 {question,description}}';

  const fetchUser = useCallback(async () => {
    client
      .fetch(query)
      .then((users) => {
        console.log({ users });
        let accordionData: any = Object.entries(users[0]).map((data: any) => {
          return {
            title: data[1].question,
            content: data[1].description,
          };
        });
        setAccordion(accordionData);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleSubmitButtonClick = useCallback(async () => {
    try {
      const response = await fetch(
        "https://sheetdb.io/api/v1/9njehnbkbt0z9?sheet=feedback-sheet",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                "How aligned are you on our Observation": selectedDot[0],
                Comments: comments,
              },
            ],
          }),
        }
      );
      if (response.status === 200) {
        const excel = await response.json();
        console.log({ excel });
      } else {
        console.log({ response });
        console.log(response.status);
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

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
                {accordion.map(({ title, content }: any) => (
                  <Accordion title={title} content={content} />
                ))}
              </div>
            </div>
            <div className={styles["audit-rating"]}>
              <p className={styles["audit-rating-question"]}>
                On scale of 1-5, how aligned are you on this overall?
              </p>
              <div className={styles["audit-rating-bar"]}>
                <DotsRow
                  index={0}
                  selectedDot={selectedDot}
                  setSelectedDot={setSelectedDot}
                />
              </div>
              <div className={styles["audit-comments-textarea"]}>
                <textarea
                  placeholder="COMMENTS"
                  id=""
                  cols={40}
                  rows={3}
                  value={comments}
                  onChange={(e: any) => setComments(e.target.value)}
                ></textarea>
              </div>
              <div className={styles["audit-comments-submit-btn"]}>
                <Button
                  handleClick={handleSubmitButtonClick}
                  buttonValue={"SUBMIT"}
                />
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
