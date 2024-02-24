import React, { useCallback, useEffect, useRef, useState } from "react";
import SelectQuestions from "../components/SelectQuestions";
import Button from "../components/Button";
import DotsRow from "../components/DotRows";
import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import FlagStepper from "../components/FlagStepper";
import client from "../utils/sanity-client";
import { sendMailFromUser } from "../utils/mail";
import { ToastContainer, toast } from "react-toastify";
import { useLocalStorageForUserDetails } from "../hooks/useLocalStorage";

const styles = require("../styles/review.module.css").default;

const NamesFeedBack = ({
  index,
  feedback,
  setFeedback,
  setSelectedDot,
  selectedDot,
  name,
}: any) => {
  return (
    <>
      <div className={styles["names-feedback"]}>
        <h1>{name}</h1>
        <p>How aligned are you on this overall?</p>
        <div className={styles["audit-rating-bar"]}>
          <DotsRow
            index={index}
            selectedDot={selectedDot}
            setSelectedDot={setSelectedDot}
          />
        </div>
        <div className={styles["feedback-input"]}>
          <label htmlFor="">Suggestion/Feedback</label>
          <input
            type="text"
            value={feedback.index}
            onChange={(e: any) =>
              setFeedback({ ...feedback, [index]: e.target.value })
            }
          />
        </div>
      </div>
    </>
  );
};

export default function Review() {
  const [feedback, setFeedback] = useState([]);
  const [favoriteName, setFavoriteName] = useState({});
  const [elaborate, setElaborate] = useState("");
  const [nameSatisfied, setNameSatisfied] = useState("");
  const [nextRoundPreference, setNextRoundPreference] = useState("");
  const [selectedDot, setSelectedDot] = useState<any>({});
  const [currentFormPage, setCurrentFormPage] = useState(3);
  const [allNames, setAllNames] = useState([]);

  const navigate = useNavigate();
  const { getItem }: any = useLocalStorageForUserDetails();
  const userData = getItem();
  const { email, name } = userData.user;

  const setDataToExcel = useCallback(async () => {
    // const { email } = await JSON.parse(
    //   localStorage.getItem("userDetails") || ""
    // );
    try {
      const response = await fetch(
        `https://sheetdb.io/api/v1/9njehnbkbt0z9/Email/${email}?sheet=feedback-sheet`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                Elaborate: elaborate,
                "Name set One Rating": selectedDot[0],
                "Name set Two Rating": selectedDot[1],
                "Name set Three Rating": selectedDot[2],
                "Name Set One - Suggestion/Feedback": feedback[0],
                "Name Set Two - Suggestion/Feedback": feedback[1],
                "Name Set Three - Suggestion/Feedback": feedback[2],
                "Which naming set you like the most": favoriteName,
                "Do you prefer another round?": nextRoundPreference,
                "Are you completely satisfied with the name?": nameSatisfied,
              },
            ],
          }),
        }
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Response submitted!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/naming-set");
      } else {
        toast.error("Failed to submit!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Internal Server Error!", {
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
  }, [
    elaborate,
    favoriteName,
    feedback,
    nameSatisfied,
    nextRoundPreference,
    selectedDot,
  ]);

  const handleSubmitButtonClick = useCallback(() => {
    // const data: any = localStorage.getItem("userDetails");
    // const { name } = JSON.parse(data);
    setDataToExcel()
      .then(() => {
        if (nextRoundPreference === "No") {
          sendMailFromUser({
            userMailMessage: "Thankyou for your reviews.",
            teamMailMessage: `${name} Has given reviews on suggested names ${new Date()}`,
          })
            .then(() => {
              console.log("mail sent to user");
              navigate(`/final-name/${favoriteName}`);
            })
            .catch((error) => {
              console.log("couldn't send mail to user", error);
            });
        } else {
          sendMailFromUser({
            userMailMessage:
              "Thankyou for your reviews. We will get back to you in 2-3 working days with new names",
            teamMailMessage: `${name} has requested for new names ${new Date()}`,
          })
            .then(() => {
              console.log("Mail sent successfully");
              navigate("/second-round-thankyou");
            })
            .catch(() => {
              console.log("Mail not sent");
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [favoriteName, navigate, nextRoundPreference, setDataToExcel]);

  const handleSatisfiedClick = (value: string) => {
    setNameSatisfied(value);
  };

  const handleNextRoundClick = (value: string) => {
    setNextRoundPreference(value);
  };

  const query = `*[_type == "NameDetails" && User->Name == "Noothan"]{
      Name,
    }`;

  const fetchAllNames = useCallback(async () => {
    client
      .fetch(query)
      .then(async (users) => {
        setAllNames(users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [query]);

  useEffect(() => {
    fetchAllNames()
      .then(() => {})
      .catch(() => {});
  }, [fetchAllNames]);

  useEffect(() => {}, [
    favoriteName,
    nameSatisfied,
    nextRoundPreference,
    selectedDot,
  ]);

  return (
    <>
      <ToastContainer />
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
              <FlagStepper isDisabled={1} currentPage={"Home"} />
              <div className={styles["form-content"]}>
                <div className={styles["form-content"]}>
                  <div className={styles["first-part"]}>
                    {allNames &&
                      allNames.map(({ Name }, index) => (
                        <>
                          <NamesFeedBack
                            key={index}
                            index={index}
                            feedback={feedback}
                            setFeedback={setFeedback}
                            selectedDot={selectedDot}
                            setSelectedDot={setSelectedDot}
                            name={Name}
                          />
                        </>
                      ))}
                  </div>
                  <div className={styles["second-part"]}>
                    <div className={styles["top-part"]}>
                      <div className={styles["select"]}>
                        <SelectQuestions
                          value={favoriteName}
                          onInputChange={setFavoriteName}
                          question={"Which one you like the most"}
                          options={[
                            `${allNames[0] && allNames[0]["Name"]}`,
                            `${allNames[1] && allNames[1]["Name"]}`,
                            `${allNames[2] && allNames[2]["Name"]}`,
                          ]}
                        />
                      </div>
                      <div className={styles["second-question"]}>
                        <div className={styles["question"]}>
                          <p>Are you completely satisfied with the name?</p>
                        </div>
                        <div className={styles["options"]}>
                          <button
                            onClick={() => handleSatisfiedClick("Yes")}
                            style={
                              nameSatisfied === "Yes"
                                ? { color: "black", fontWeight: "bold" }
                                : {}
                            }
                          >
                            <p>Yes</p>
                          </button>
                          <button
                            onClick={() => handleSatisfiedClick("No")}
                            style={
                              nameSatisfied === "No"
                                ? { color: "black", fontWeight: "bold" }
                                : {}
                            }
                          >
                            <p>No</p>
                          </button>
                        </div>
                      </div>
                      <div className={styles["third-question"]}>
                        <div className={styles["question"]}>
                          <p>Do you prefer another round?</p>
                        </div>
                        <div className={styles["options"]}>
                          <button
                            onClick={() => handleNextRoundClick("Yes")}
                            style={
                              nextRoundPreference === "Yes"
                                ? { color: "black", fontWeight: "bold" }
                                : {}
                            }
                          >
                            <p>Yes</p>
                          </button>
                          <button
                            onClick={() => handleNextRoundClick("No")}
                            style={
                              nextRoundPreference === "No"
                                ? { color: "black", fontWeight: "bold" }
                                : {}
                            }
                          >
                            <p>No</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["third-part"]}>
                    <input
                      type="text"
                      value={elaborate}
                      onChange={(e: any) => setElaborate(e.target.value)}
                      placeholder="Elaborate"
                    />
                    <div className={styles["btn"]}>
                      <Button
                        handleClick={handleSubmitButtonClick}
                        buttonValue={"Submit"}
                      />
                    </div>
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
