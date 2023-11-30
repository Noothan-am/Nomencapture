import React from "react";
import TextQuestions from "../components/TextQuestions";
import RadioQuestions from "../components/RadioQuestions";
import DescriptionQuestions from "../components/DescriptionQuestions";
import SelectQuestions from "../components/SelectQuestions";
import CheckBoxQuestions from "../components/CheckBoxQuestions";
const styles = require("../styles/forms.module.css").default;

const selectOptions = [
  "Accounting",
  "Airlines/Aviation",
  "Alternative Dispute Resolution",
  "Alternative Medicine",
  "Animation",
  "Apparel/Fashion",
  "Architecture/Planning",
];

function SecondFormPage() {
  return (
    <>
      <div className={styles["firstpart"]}>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            question={
              "What is the age bracket of your Target Audience Group (TG) ?"
            }
            options={[
              "0-10",
              "11-20",
              "21-30",
              "31-40",
              "41-50",
              "51-60",
              "61-70",
              "70+",
            ]}
          />
        </div>
        <div className={styles["radio"]}>
          <RadioQuestions
            question={
              "What purchasing behavior is shown by the TG buying your your service / product?"
            }
            options={["Need based", "Luxury / Want", "Cost saving"]}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={
              "Do you see yourself expanding to other cities/states in future? If yes, where?"
            }
          />
        </div>
      </div>
      <div className={styles["secondpart"]}>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            question={
              "What is the age bracket of your Target Audience Group (TG) ?"
            }
            options={[
              "Students",
              "Young entrepreneurs",
              "Large company decision makers (corporate C level)",
              "Young CEOs / Founders",
              "General working adults",
              "Other",
            ]}
          />
        </div>
        <div className={styles["radio"]}>
          <RadioQuestions
            question={"How often does your TG purchase your product / service?"}
            options={["Very Often", "Rarely", "One Time", "Frequently"]}
          />
        </div>
        <div className={styles["email"]}>
          <TextQuestions
            question={
              "What are the cities/states in India that you're planning to focus on?"
            }
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
