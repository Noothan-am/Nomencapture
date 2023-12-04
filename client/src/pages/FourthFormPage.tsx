import React from "react";
import DescriptionQuestions from "../components/DescriptionQuestions";
import CheckBoxQuestions from "../components/CheckBoxQuestions";
const styles = require("../styles/forms.module.css").default;

function SecondFormPage() {
  return (
    <>
      <div className={styles["firstpart-4"]}>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            question={"Where will your TG find your product / service?"}
            options={[
              "Retail Outlets",
              "Social Media",
              "E-Commerce Platform",
              "Directly on Website",
              "Other",
            ]}
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "What is the ultimate impact you want to create with your product / service? Or WHY does your product / service exist?"
            }
            description={
              "Ex. This would be Google's response: To provide access to the world’s information in one click"
            }
          />
        </div>
      </div>
      <div className={styles["secondpart-4"]}>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "If your product / service were a person, list the values or beliefs it will always stand by? "
            }
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "How do you think your product / service can achieve the above?"
            }
            description={
              "Ex. This would be Google's response: To organize the world’s information and make it universally accessible and useful"
            }
          />
        </div>
        {/* <div className={styles["email"]}>
          <TextQuestions
            question={
              "What are the cities/states in India that you're planning to focus on?"
            }
          />
        </div> */}
      </div>
    </>
  );
}

export default SecondFormPage;
