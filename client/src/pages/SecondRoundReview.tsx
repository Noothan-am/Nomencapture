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
import SecondroundStepper from "../components/SecondRoundStepper";

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

export default function SecondRoundReview() {
  const [feedback, setFeedback] = useState([]);
  const [favoriteName, setFavoriteName] = useState({});
  const [elaborate, setElaborate] = useState("");
  const [nameSatisfied, setNameSatisfied] = useState("");
  const [nextRoundPreference, setNextRoundPreference] = useState("");
  const [selectedDot, setSelectedDot] = useState<any>({});
  const [currentFormPage, setCurrentFormPage] = useState(3);
  const [allNames, setAllNames] = useState([]);
  const [currentData, setCurrentData] = useState(0);
  const navigate = useNavigate();

  const setDataToExcel = useCallback(async () => {
    const { email } = await JSON.parse(
      localStorage.getItem("userDetails") || ""
    );
    console.log(email);
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
      const excel = await response.json();
      console.log({ excel });
    } catch (error) {
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

  const handleSubmitButtonClick = () => {
    const data: any = localStorage.getItem("userDetails");
    const { name } = JSON.parse(data);
    setDataToExcel()
      .then(() => {
        sendMailFromUser({
          userMailMessage: "Thankyou for your reviews.",
          teamMailMessage: `${name} Has given reviews on new names ${new Date()}`,
        })
          .then(() => {
            navigate(`/final-name/${favoriteName}`);
          })
          .catch((error) => {
            console.log("couldn't send mail to user", error);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
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

  const handleNomenButtonClick = (number: any) => {
    setCurrentData(number);
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
              {/* <FlagStepper isDisabled={1} currentPage={"Home"} /> */}
              <SecondroundStepper
                isDisabled={1}
                currentPage={"Home"}
                handleNomenButtonClick={handleNomenButtonClick}
              />
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
