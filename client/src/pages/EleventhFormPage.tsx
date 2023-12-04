import React from "react";
import DescriptionQuestions from "../components/DescriptionQuestions";
import CheckBoxQuestions from "../components/CheckBoxQuestions";
import RadioQuestions from "../components/RadioQuestions";
import Circle from "../components/Circle";
import TextQuestions from "../components/TextQuestions";
const styles = require("../styles/forms.module.css").default;

function SecondFormPage() {
  return (
    <>
      <div className={styles["firstpart-9"]}>
        <div className={styles["radio"]}>
          <RadioQuestions
            question={"What appeal do you want the name to have?"}
            options={[
              "Colloquial/Informal (Blinkit, Mango)",
              "Vernacular / Regional (Language: Soch, Ayush, Patanjali)",
              "Formal (Reliance, Apollo)",
              "Global (Global appeal: Vistara, Lenovo, Westside, Medanta)",
            ]}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"What was the object you last took a photo of?"}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions question={"Your favourite go to place for peace?"} />
        </div>
      </div>
      <div className={styles["secondpart-9"]}>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "Imagine you're making a painting. You have no reference and you're in an empty room with no window. What will you draw on your canvas?"
            }
          />
        </div>

        <div className={styles["radio"]}>
          <TextQuestions
            question={"What was the color of the dress you last bought?"}
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
