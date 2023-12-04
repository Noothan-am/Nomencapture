import React from "react";
import DescriptionQuestions from "../components/DescriptionQuestions";
import CheckBoxQuestions from "../components/CheckBoxQuestions";
import RadioQuestions from "../components/RadioQuestions";
import TextQuestions from "../components/TextQuestions";
const styles = require("../styles/forms.module.css").default;

function SecondFormPage() {
  return (
    <>
      <div className={styles["firstpart-4"]}>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            question={"How do want your customers to remember you as"}
            options={[
              "Straightforward and trustworthy",
              "Like a good friend to them.",
              "Pioneers in our field.",
              "Cutting-edge and innovative.",
              "A group of miracle-workers.",
              "Helpful and service-minded.",
              "Other.",
            ]}
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={"Competitor/other brand names you like"}
          />
        </div>
      </div>
      <div className={styles["secondpart-4"]}>
        <div className={styles["radio"]}>
          <TextQuestions
            question={
              "List your competitors (mention website links if available)"
            }
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={"Competitor/other brand names you dislike"}
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
