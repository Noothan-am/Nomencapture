import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Button from "../components/Button";
import DotsRow from "../components/DotRows";
import Navbar from "../components/Navbar";
import SecondroundStepper from "../components/SecondRoundStepper";
import SelectQuestions from "../components/SelectQuestions";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import { useLocalStorageForUserDetails } from "../hooks/useLocalStorage";
import { sendMailFromUser } from "../utils/mail";
import client from "../utils/sanity-client";

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
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { getItem }: any = useLocalStorageForUserDetails();
  const userData = getItem();
  const { name, email } = userData.user;

  const setDataToExcel = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/update-feedback-data`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            value: [
              selectedDot[0],
              selectedDot[1],
              feedback[0],
              feedback[1],
              favoriteName,
              nameSatisfied,
              nextRoundPreference,
              elaborate,
            ],
            columnToUpdate: "R",
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

  const handleSubmitButtonClick = () => {
    setDataToExcel()
      .then(() => {
        setLoading(true);
        sendMailFromUser({
          userMailMessage: "Thankyou for your reviews.",
          teamMailMessage: `${name} Has given reviews on new names ${new Date()}`,
        })
          .then(() => {
            setLoading(true);

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

  const query = `*[_type == "NameDetails" && User->Email == "${email}" && Round == 2]{
      Name,
    }`;

  const fetchAllNames = useCallback(async () => {
    client
      .fetch(query)
      .then(async (users) => {
        setLoading(false);
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
  if (loading) {
    return <h1>Loading...</h1>;
  }

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
