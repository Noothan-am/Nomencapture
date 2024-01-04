import React, { useEffect, useState } from "react";
import SelectQuestions from "../components/SelectQuestions";
import Button from "../components/Button";
import DotsRow from "../components/DotRows";

const styles = require("../styles/review.module.css").default;

const NamesFeedBack = ({
  index,
  feedback,
  setFeedback,
  setSelectedDot,
  selectedDot,
}: any) => {
  return (
    <>
      <div className={styles["names-feedback"]}>
        <h1>Unavanu</h1>
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

  const fetchData = async () => {
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
                "How aligned are you on our Observation": elaborate,
                "Hear it First - Voice One": selectedDot[0],
                "Hear it First - Voice Two": selectedDot[1],
                "Hear it First - Voice Three": selectedDot[2],
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
  };

  const handleSubmitButtonClick = () => {
    // fetchData();
    console.log({
      feedback,
      favoriteName,
      elaborate,
      nameSatisfied,
      nextRoundPreference,
      selectedDot,
    });
  };
  const handleSatisfiedClick = (value: string) => {
    setNameSatisfied(value);
  };

  const handleNextRoundClick = (value: string) => {
    setNextRoundPreference(value);
  };

  useEffect(() => {}, [
    favoriteName,
    nameSatisfied,
    nextRoundPreference,
    selectedDot,
  ]);

  return (
    <>
      <div className={styles["form-content"]}>
        <div className={styles["first-part"]}>
          {Array.from({ length: 3 }, (_, index) => (
            <NamesFeedBack
              key={index}
              index={index}
              feedback={feedback}
              setFeedback={setFeedback}
              selectedDot={selectedDot}
              setSelectedDot={setSelectedDot}
            />
          ))}
        </div>
        <div className={styles["second-part"]}>
          <div className={styles["top-part"]}>
            <div className={styles["select"]}>
              <SelectQuestions
                value={favoriteName}
                onInputChange={setFavoriteName}
                question={"Which one you like the most"}
                options={["name 1", "name 2", "name 3"]}
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
    </>
  );
}
