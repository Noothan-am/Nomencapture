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
      <div className={styles["firstpart-3"]}>
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
            question={"Which gender of TG is your product / service for?"}
            options={["All", "Men", "Women"]}
            showOthersInput={true}
          />
        </div>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            question={"What occupation your TG may have?"}
            options={[
              "Everyone",
              "Students",
              "General",
              "Working",
              "Adults",
              "Young",
              "CEOs",
              "Founders",
              "Large",
              "Company",
              "Decision",
              "Makers",
              "(Corporate",
              "C",
              "Level)",
              "Salaried",
              "Employees",
              "Self-Employed",
              "Retired",
              "Elders",
            ]}
          />
        </div>
        <div className={styles["radio"]}>
          <RadioQuestions
            question={"How often do you think your product will be purchased?"}
            options={[
              "Periodic / Subscription based",
              "Frequently",
              "Rarely",
              "One time",
            ]}
            showOthersInput={false}
          />
        </div>
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
            question={"What values your TG expects in this product segment?"}
            description={
              "You want your TG to choose you over the competitor for what values?"
            }
          />
        </div>
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
            question={"Do you have any additional information about your TG?"}
            description={"(Desires, Interests etc.)"}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions question={"A hero you look upto?"} />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
