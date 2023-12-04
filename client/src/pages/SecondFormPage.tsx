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
      <div className={styles["firstpart-2"]}>
        <div className={styles["email"]}>
          <TextQuestions
            question={
              "Mention the Trademark classes your product/service belongs to? "
            }
          />
        </div>
        <div className={styles["email"]}>
          <TextQuestions
            question={"What need does your product / service cater to?"}
          />
        </div>

        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "Do you see yourself expanding to other cities/states in future? If yes, where?"
            }
          />
        </div>
      </div>
      <div className={styles["secondpart-2"]}>
        <RadioQuestions
          question={"What price segment does your product/service fall in?"}
          options={[
            "Mass (Affordable)",
            "Niche (Premium - Affordable)",
            "Premium",
            "Luxury",
          ]}
        />
        <div className={styles["email"]}>
          <TextQuestions
            question={
              "What are the cities/states in India that you're planning to focus on?"
            }
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "What do you think is the differentiating value you provide / What is your USP?"
            }
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
