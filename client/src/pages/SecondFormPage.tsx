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
            question={"What need does your product / service cater to?"}
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "What do you think is the differentiating value you provide / What is your USP?"
            }
          />
        </div>
        <RadioQuestions
          question={"What price segment does your product/service fall in?"}
          options={[
            "Mass (Affordable)",
            "Niche (Premium - Affordable)",
            "Premium",
            "Luxury",
          ]}
          showOthersInput={false}
        />
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "Do you see yourself expanding to other cities/states in future? If yes, where?"
            }
          />
        </div>
        <div className={styles["email"]}>
          <TextQuestions
            question={
              "If your product / service were a person, list the values or beliefs it will always stand by? "
            }
          />
        </div>
        <div className={styles["textarea"]}>
          <DescriptionQuestions
            question={
              "What is the ultimate impact you want to create with your product / service? Or WHY does your product / service exist?"
            }
            description={
              "Ex. This would be Google's response: To provide access to the world’s information in one click"
            }
          />
        </div>
        <div className={styles["textarea"]}>
          <DescriptionQuestions
            question={
              "How do you think your product / service can achieve the above?"
            }
            description={
              "Ex. This would be Google's response: To organize the world’s information and make it universally accessible and useful"
            }
          />
        </div>
        <div className={styles["email"]}>
          <RadioQuestions
            question={
              "If your product / service were a person, what kind of impact it would want to create?"
            }
            options={[
              "Leave a lasting mark on peoples' lives",
              "Provide structure for the workings of the world",
              "Connect with people, be a partner",
              "Lead, inform and educate",
            ]}
            showOthersInput={true}
          />
        </div>
        <div className={styles["email"]}>
          <TextQuestions
            question={"What is the color of the dress you wore yesterday?"}
          />
        </div>
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
              "Friendly",
              "Commanding",
              "Authoritative",
              "Refined",
              "Articulate",
              "Knowledgable",
              "Well",
              "Informed",
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
            ]}
          />
        </div>
        <div className={styles["email"]}>
          <TextQuestions
            question={"What was the object you last took a photo of?"}
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
