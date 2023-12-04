import React from "react";
import DescriptionQuestions from "../components/DescriptionQuestions";
import CheckBoxQuestions from "../components/CheckBoxQuestions";
import RadioQuestions from "../components/RadioQuestions";
const styles = require("../styles/forms.module.css").default;

function SecondFormPage() {
  return (
    <>
      <div className={styles["firstpart-5"]}>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={"List the interests and desires of your TG"}
            description={
              "Ex. This would be Google's response: To provide access to the world’s information in one click"
            }
          />
        </div>
        <div className={styles["radio"]}>
          <RadioQuestions
            question={"What are we naming?"}
            options={[
              "Leave a lasting mark on peoples' lives",
              "Provide structure for the workings of the world",
              "Connect with people, be a partner",
              "Lead, inform and educate",
              "Other",
            ]}
          />
        </div>
      </div>
      <div className={styles["secondpart-5"]}>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "List the values your TG associates with or looks for in your product / service?"
            }
          />
        </div>

        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            question={"Where will your TG find your product / service?"}
            options={[
              "Straightforward and trustworthy.",
              "Like a good friend to them.",
              "Pioneers in our field.",
              "Cutting-edge and innovative.",
              "A group of miracle-workers.",
              "Helpful and service-minded.",
              "Other",
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
