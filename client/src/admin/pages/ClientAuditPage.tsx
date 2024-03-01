import React, { useState, useEffect, useCallback } from "react";
import SideBar from "../../components/SideBar";
import Tabs from "../../components/Tabs";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import DotsRow from "../../components/DotRows";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import client from "../../utils/sanity-client";

const styles = require("../../styles/audit.module.css").default;

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

function ClientAuditPage({
  allUserFeedbackData,
  next,
  currentFormPage,
  handleChangeCurrentPageToNext,
  handleChangeCurrentPageToPrevious,
}: any) {
  const [accordion, setAccordion] = useState([]);
  const [selectedDot, setSelectedDot] = useState([]);
  const [comments, setComments] = useState("");

  const query =
    '*[_type == "AuditPage" && User->Email == "noothan"]{ Title1 {question,description},Title2 {question,description}, Title3 {question,description},Title4 {question,description}}';

  const fetchUser = useCallback(async () => {
    setSelectedDot(
      allUserFeedbackData["How aligned are you on our Observation"]
    );
    setComments(allUserFeedbackData["Comments"]);
    client
      .fetch(query)
      .then((users: any) => {
        let accordionData: any = Object.entries(users[0]).map((data: any) => {
          return {
            title: data[1].question,
            content: data[1].description,
          };
        });
        setAccordion(accordionData);
      })
      .catch((error: any) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <div className={styles["audit-page"]}>
        <div className={styles["audit-container"]}>
          <div className={styles["audit-content"]}>
            <div className={styles["audit-questions"]}>
              <h2>Brand Fundamentals</h2>
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
                <DotsRow disabled={true} index={0} selectedDot={selectedDot} />
              </div>
              <div className={styles["audit-comments-textarea"]}>
                <textarea
                  disabled
                  placeholder="COMMENTS"
                  id=""
                  cols={40}
                  rows={3}
                  value={comments}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientAuditPage;
