import { useCallback, useEffect, useState } from "react";
import DotsRow from "../../components/DotRows";
import SelectQuestions from "../../components/SelectQuestions";
import client from "../../utils/sanity-client";
import { useLocalStorageForUserDetails } from "../../hooks/useLocalStorage";

const styles = require("../../styles/review.module.css").default;

const NamesFeedBack = ({ index, feedback, selectedDot, name }: any) => {
  return (
    <>
      <div className={styles["names-feedback"]}>
        <h1>{name}</h1>
        <p>How aligned are you on this overall?</p>
        <div className={styles["audit-rating-bar"]}>
          <DotsRow disabled={true} index={index} selectedDot={selectedDot} />
        </div>
        <div className={styles["feedback-input"]}>
          <label htmlFor="">Suggestion/Feedback</label>
          <textarea rows={5} cols={30} disabled value={feedback[index]} />
        </div>
      </div>
    </>
  );
};

export default function ClientReviewPage({ allUserFeedbackData }: any) {
  const [feedback, setFeedback] = useState<any>([]);
  const [favoriteName, setFavoriteName] = useState({});
  const [elaborate, setElaborate] = useState("");
  const [nameSatisfied, setNameSatisfied] = useState("");
  const [nextRoundPreference, setNextRoundPreference] = useState("");
  const [selectedDot, setSelectedDot] = useState<any>({});
  const [allNames, setAllNames] = useState([]);

  const { getItem }: any = useLocalStorageForUserDetails();
  const userData = getItem();
  const { email } = userData.user;

  const query = `*[_type == "NameDetails" && User->Email == "${email}" && Round == 1 ]{
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
    if (allUserFeedbackData) {
      setSelectedDot({
        0: allUserFeedbackData["Name set One Rating"],
        1: allUserFeedbackData["Name set Two Rating"],
        2: allUserFeedbackData["Name set Three Rating"],
      });
      setFavoriteName(
        allUserFeedbackData["Which naming set you like the most"]
      );
      setElaborate(allUserFeedbackData["Elaborate"]);
      setNameSatisfied(
        allUserFeedbackData["Are you completely satisfied with the name?"]
      );
      setNextRoundPreference(
        allUserFeedbackData["Do you prefer another round?"]
      );
      setFeedback({
        0: allUserFeedbackData["Name Set One - Suggestion/Feedback"],
        1: allUserFeedbackData["Name Set Two - Suggestion/Feedback"],
        2: allUserFeedbackData["Name Set Three - Suggestion/Feedback"],
      });
    }
    fetchAllNames().catch(() => {
      console.log("error in the fetch");
    });
  }, [fetchAllNames]);

  return (
    <>
      <div className={styles["naming-set"]}>
        <div className={styles["hero"]}>
          <div className={styles["naming-set-container-2"]}>
            <div className={styles["div-2"]}>
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
                      {/* <SelectQuestions
                        value={favoriteName}
                        onInputChange={setFavoriteName}
                        question={"Which one you like the most"}
                        options={[
                          `${allNames[0] && allNames[0]["Name"]}`,
                          `${allNames[1] && allNames[1]["Name"]}`,
                          `${allNames[2] && allNames[2]["Name"]}`,
                        ]}
                      /> */}
                      <div className={styles["select-questions"]}>
                        <label htmlFor="">
                          {"Which of the names you like the most ?"}
                        </label>
                        <select disabled>
                          <option>Choose</option>
                          {[
                            `${allNames[0] && allNames[0]["Name"]}`,
                            `${allNames[1] && allNames[1]["Name"]}`,
                            `${allNames[2] && allNames[2]["Name"]}`,
                          ].map((option: string, index: number) => {
                            return (
                              <option
                                key={index}
                                selected={favoriteName === option}
                                value={option}
                              >
                                {option}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className={styles["second-question"]}>
                      <div className={styles["question"]}>
                        <p>Are you completely satisfied with the name?</p>
                      </div>
                      <div className={styles["options"]}>
                        {/* <button
                          onClick={() => handleNextRoundClick("Yes")}
                          style={
                            nameSatisfied === "Yes"
                              ? { color: "black", fontWeight: "bold" }
                              : {}
                          }
                        >
                          <p>Yes</p> */}
                        <div className={styles["select-inputs"]} key={"index"}>
                          <input
                            type="radio"
                            name={"question"}
                            disabled
                            checked={nameSatisfied === "Yes"}
                          />
                          <label aria-disabled>Yes</label>
                        </div>
                        <div className={styles["select-inputs"]} key={"index"}>
                          <input
                            type="radio"
                            name={"question"}
                            disabled
                            checked={nameSatisfied === "No"}
                          />
                          <label aria-disabled>No</label>
                        </div>
                        {/* <button
                          onClick={() => handleNextRoundClick("No")}
                          style={
                            nameSatisfied === "No"
                              ? { color: "black", fontWeight: "bold" }
                              : {}
                          }
                        >
                          <p>No</p>
                        </button> */}
                      </div>
                    </div>
                    {/* <div className={styles["third-question"]}>
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
                    </div> */}
                  </div>
                </div>
                <div className={styles["third-part"]}>
                  <textarea
                    rows={4}
                    cols={50}
                    disabled
                    value={elaborate}
                    placeholder="| Feel free to elaborate in detail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
