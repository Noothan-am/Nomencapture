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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocalStorageForUserDetails } from "../hooks/useLocalStorage";
const img = require("../assets/images/audit.png");

const styles = require("../styles/audit.module.css").default;

const Accordion = ({ title, content, index }: any) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => console.log(title, content, []));
  return (
    <div className={styles["question"]} onClick={() => setIsActive(!isActive)}>
      <div className={styles["accordion-title"]}>
        {index} {title}
        {isActive ? <RxCross2 /> : <FiPlus />}
      </div>
      {isActive && <p className={styles["accordion-content"]}>{content}</p>}
      <hr />
    </div>
  );
};

function AuditPage() {
  const [accordion, setAccordion] = useState([]);
  const [selectedDot, setSelectedDot] = useState([]);
  const [comments, setComments] = useState("");

  const { getItem }: any = useLocalStorageForUserDetails();

  const checkReview = () => {
    return selectedDot[0] && comments.trim();
  };

  const navigate = useNavigate();
  const navigateToNamingSet = async () => {
    const hasFilled = checkReview();
    if (!hasFilled) {
      toast.error("Please fill review!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      await submitReview();
    }
  };

  const fetchUser = useCallback(async () => {
    const userData = getItem();

    const query = `*[_type == "AuditPage" && User->Email == "${userData.user.email}"]{ Title1 {question,description},Title2 {question,description}, Title3 {question,description},Title4 {question,description}}`;
    client
      .fetch(query)
      .then((users: any) => {
        console.log({ users });

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

  const submitReview = useCallback(async () => {
    const userData = getItem();
    const { email } = userData.user;
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/update-feedback-data`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            value: [selectedDot[0], comments],
            columnToUpdate: "C",
          }),
        }
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Response submitted", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/audio-page");
      } else {
        toast.error("Failed to submit response!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("error");
      }
    } catch (error) {
      toast.error("Internal server error!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(error);
    }
  }, [comments, navigate, selectedDot]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <ToastContainer />
      <div className={styles["audit-page"]}>
        <div className={styles["audit-container"]}>
          <div className={styles["sidebar"]}>
            <SideBar>
              <Tabs show={2} />
            </SideBar>
          </div>
          <div className={styles["your-name-main-container"]}>
            <div className={styles["navbar"]}>
              <Navbar />
            </div>
            <div className={styles["your-name-container"]}>
              <div className={styles["div"]}>
                <div className={styles["audit-content"]}>
                  <div className={styles["audit-questions"]}>
                    <h2>Brand Fundamentals</h2>
                    <div className={styles["audit-each-question"]}>
                      {accordion.map(({ title, content }: any, index) => (
                        <Accordion
                          title={title}
                          indx={index}
                          content={content}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["audit-rating-container"]}>
                <div className={styles["audit-rating"]}>
                  <div className={styles["audit-rating-image"]}>
                    <img src={img} alt="" />
                  </div>
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
                  <div className={styles["audit-rating-submit"]}>
                    <Button
                      handleClick={navigateToNamingSet}
                      buttonValue={"PROCEED AND CONTINUE"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuditPage;
