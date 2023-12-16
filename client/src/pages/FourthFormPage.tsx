import React from "react";

import Circle from "../components/Circle";
import TextQuestions from "../components/TextQuestions";
import RadioQuestions from "../components/RadioQuestions";
const styles = require("../styles/forms.module.css").default;

function SecondFormPage() {
  return (
    <>
      <div className={styles["firstpart-4"]}>
        <div className={styles["radio"]}>
          <Circle
            question={"Clever / Straightforward"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Clever"}
            finalText={"Straightforward"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Global / Local"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Global"}
            finalText={"Local"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Formal / Friendly"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Formal"}
            finalText={"Friendly"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Modern / Traditional"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Modern"}
            finalText={"Traditional"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Emotional / Logical"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Emotional"}
            finalText={"Logical"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Scientific / General"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Scientific"}
            finalText={"General"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Whimsical / Serious"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Whimsical"}
            finalText={"Serious"}
          />
        </div>
        <div className={styles["radio"]}>
          <Circle
            question={"Mature / Youthful"}
            options={["1", "2", "3", "4", "5"]}
            initialText={"Mature"}
            finalText={"Youthful"}
          />
        </div>
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
        <div className={styles["secondpart-9d"]}>
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
            question={"Emotions or ideas you want the name to evoke?"}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"Connotations or ideas you want to completely avoid?"}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={
              "Imagine you're painting. You have no reference and you're in an empty room with no window. What will you draw on your canvas?"
            }
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
