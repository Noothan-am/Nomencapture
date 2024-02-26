import { useCallback, useEffect, useState } from "react";
import DotsRow from "../../components/DotRows";
import SelectQuestions from "../../components/SelectQuestions";
import client from "../../utils/sanity-client";

const styles = require("../../styles/review.module.css").default;

const NamesFeedBack = ({ index, feedback, selectedDot, name }: any) => {
  return (
    <>
      <div className={styles["names-feedback"]}>
        <h1>{name}</h1>
        <p>How aligned are you on this overall?</p>
        <div className={styles["audit-rating-bar"]}>
          <DotsRow index={index} selectedDot={selectedDot} />
        </div>
        <div className={styles["feedback-input"]}>
          <label htmlFor="">Suggestion/Feedback</label>
          <input type="text" value={feedback && feedback[index]} disabled />
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

  const query = `*[_type == "NameDetails" && User->Name == "noothan"]{
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
          <div className={styles["naming-set-container"]}>
            <div className={styles["div"]}>
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
                          disabled={true}
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
                            disabled
                            style={
                              nameSatisfied === "Yes"
                                ? { color: "black", fontWeight: "bold" }
                                : {}
                            }
                          >
                            <p>Yes</p>
                          </button>
                          <button
                            disabled
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
                            disabled
                            style={
                              nextRoundPreference === "Yes"
                                ? { color: "black", fontWeight: "bold" }
                                : {}
                            }
                          >
                            <p>Yes</p>
                          </button>
                          <button
                            disabled
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
                      disabled
                      value={elaborate}
                      onChange={(e: any) => setElaborate(e.target.value)}
                      placeholder="Elaborate"
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
