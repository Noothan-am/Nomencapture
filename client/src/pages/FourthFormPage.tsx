import React from "react";

import Circle from "../components/Circle";
import TextQuestions from "../components/TextQuestions";
import RadioQuestions from "../components/RadioQuestions";
import SelectQuestions from "../components/SelectQuestions";
const styles = require("../styles/forms.module.css").default;

const selectOptions = [
  "Direct (Ex. The Container Store, VitaminWater)",
  "Indirect (Ex. The Better Home, Twitter, Netflix)",
  "Abstract (Ex. Amazon, Bluefly, Elephant Design)",
];

function SecondFormPage() {
  const handleBlankImaginationChange = (value: any) => {
    console.log(value);
  };
  const handleConnotationsChange = (value: any) => {
    console.log(value);
  };
  const handleIdeasChange = (value: any) => {
    console.log(value);
  };
  const handleDesiredAllureChange = (value: any) => {
    console.log(value);
  };
  const handleMemorableImpressionChange = (value: any) => {
    console.log(value);
  };
  const handleCompetitorsChange = (value: any) => {
    console.log(value);
  };
  const handleMeaningAssociationChange = (value: any) => {
    console.log(value);
  };
  const handleBrandNameScaleChange = (value: any) => {
    console.log(value);
  };

  return (
    <>
      <div className={styles["firstpart-4"]}>
        <div className={styles["circle-table"]}>
          <label htmlFor="">
            Where would you like your brand name in the following scales?
          </label>
          <div className={styles["circle-box-container"]}>
            <div className={styles["radio"]}>
              <Circle
                question={"Clever / Straightforward"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Clever"}
                finalText={"Straightforward"}
                onchange={handleBrandNameScaleChange}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Global / Local"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Global"}
                finalText={"Local"}
                onchange={handleBrandNameScaleChange}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Formal / Friendly"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Formal"}
                finalText={"Friendly"}
                onchange={handleBrandNameScaleChange}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Modern / Traditional"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Modern"}
                finalText={"Traditional"}
                onchange={handleBrandNameScaleChange}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Emotional / Logical"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Emotional"}
                finalText={"Logical"}
                onchange={handleBrandNameScaleChange}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Scientific / General"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Scientific"}
                finalText={"General"}
                onchange={handleBrandNameScaleChange}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Whimsical / Serious"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Whimsical"}
                finalText={"Serious"}
                onchange={handleBrandNameScaleChange}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Mature / Youthful"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Mature"}
                finalText={"Youthful"}
                onchange={handleBrandNameScaleChange}
              />
            </div>
          </div>
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={
              "List your competitors (mention website links if available)"
            }
            onInputChange={handleCompetitorsChange}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"Competitor/other brand names you like"}
            onInputChange={handleMemorableImpressionChange}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            onInputChange={handleMemorableImpressionChange}
            question={"Competitor/other brand names you dislike"}
          />
        </div>
        <div className={styles["secondpart-9d"]}>
          {/* <div className={styles["radio"]}>
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
            /> */}
          {/* </div> */}
          <RadioQuestions
            question={"What meaning-association would you prefer the most?"}
            options={selectOptions}
            onInputChange={handleMeaningAssociationChange}
          />
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
            onInputChange={handleDesiredAllureChange}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"Emotions or ideas you want the name to evoke?"}
            onInputChange={handleIdeasChange}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"Connotations or ideas you want to completely avoid?"}
            onInputChange={handleConnotationsChange}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={
              "Imagine you're painting. You have no reference and you're in an empty room with no window. What will you draw on your canvas?"
            }
            onInputChange={handleBlankImaginationChange}
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
