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
          <TextQuestions
            question={
              "List your competitors (mention website links if available)"
            }
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions question={"Competitor/other brand names you like"} />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"Competitor/other brand names you dislike"}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"Emotions or ideas you want the name to evoke?"}
          />
        </div>
      </div>
      <div className={styles["secondpart-9"]}>
        <div className={styles["radio"]}>
          <Circle
            question={"Direct (Ex. The Container Store, VitaminWater)"}
            options={["1", "2", "3", "None"]}
            initialText={"Min"}
            finalText={"Max"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Indirect (Ex. The Better Home, Twitter, Netflix)"}
            options={["1", "2", "3", "None"]}
            initialText={"Min"}
            finalText={"Max"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Abstract (Ex. Amazon, Bluefly, Elephant Design)"}
            options={["1", "2", "3", "None"]}
            initialText={"Min"}
            finalText={"Max"}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"Connotations or ideas you want to completely avoid?"}
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
