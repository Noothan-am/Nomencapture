import React from "react";
import DescriptionQuestions from "../components/DescriptionQuestions";
import CheckBoxQuestions from "../components/CheckBoxQuestions";
import RadioQuestions from "../components/RadioQuestions";
const styles = require("../styles/forms.module.css").default;

function SecondFormPage() {
  return (
    <>
      <div className={styles["firstpart-5"]}>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            question={
              "If your product / service were a person, how would you definitely like it to come across as?"
            }
            options={[
              "Rebellious",
              "Combative",
              "Disruptive",
              "Bold",
              "Brave",
              "Honest",
              "Humble",
              "Sincere",
              "Optimistic",
              "Hopeful",
              "Fearless",
              "Excited",
              "Inspirational",
              "Provocative",
              "Passionate",
              "Authentic",
              "Relatable",
            ]}
          />
        </div>
      </div>
      <div className={styles["secondpart-5"]}>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            question={"Select TOP 3 that apply"}
            options={[
              "Friendly",
              "Commanding",
              "Authoritative",
              "Refined",
              "Articulate",
              "Knowledgeable",
              "Well Informed",
              "Playful",
              "Fun-Loving",
              "Caring",
              "Warm",
              "Empathetic",
              "Mystical",
              "Visionary",
              "Intimate",
              "Sensual",
              "Loving",
              "Other",
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
