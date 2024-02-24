import { useCallback, useEffect, useState } from "react";

import Circle from "../components/Circle";
import DescriptionQuestions from "../components/DescriptionQuestions";
import RadioQuestions from "../components/RadioQuestions";
import TextQuestions from "../components/TextQuestions";
import useFormData from "../context/FormContext";
import useLocalStorage from "../hooks/useLocalStorage";
const styles = require("../styles/forms.module.css").default;

const TgQuestion = ({ meaningAssociation, setMeaningAssociation }: any) => {
  return (
    <div className={styles["textarea-questions"]}>
      <label htmlFor="">
        {
          "Choose one OR write the order of priority of what meaning-association would you prefer for the name?"
        }
      </label>
      <div className={styles["desc"]}>
        <i>{"1. Direct (Ex. The Container Store, VitaminWater)"}</i>
      </div>
      <div className={styles["desc"]}>
        <i>{"2. Indirect (Ex. The Better Home, Twitter, Netflix)"}</i>
      </div>
      <div className={styles["desc"]}>
        <i>{"3. Abstract (Ex. Amazon, Bluefly, Elephant Design)"}</i>
      </div>
      <div className={styles["desc"]}>
        <p>
          {
            "For ex: You can say 1>2>3 with 1 to be preferred the most and 3 to be prefered the least."
          }
        </p>
      </div>
      <input
        placeholder="Your Answer"
        onChange={(e) => setMeaningAssociation(e.target.value)}
        value={meaningAssociation}
        type="text"
      />
    </div>
  );
};

function SecondFormPage() {
  const [brandNameScale, setBrandNameScale] = useState({});
  const [competitors, setCompetitors] = useState("");
  const [likedCompetitorNames, setLikedCompetitorNames] = useState("");
  const [dislikedCompetitorNames, setDislikedCompetitorNames] = useState("");
  const [meaningAssociation, setMeaningAssociation] = useState("");
  const [desiredAllure, setDesiredAllure] = useState({});
  const [nameIdeas, setIdeas] = useState("");
  const [avoidedConnotations, setAvoidedConnotations] = useState("");
  const [blankImagination, setBlankImagination] = useState("");

  const { getItem } = useLocalStorage();
  const { form, setForm }: any = useFormData();

  const setFormDetails = useCallback(() => {
    window.location.hash = "#fourthpage";
    const data = {
      ...form,
      brandNameScale,
      competitors,
      likedCompetitorNames,
      dislikedCompetitorNames,
      meaningAssociation,
      desiredAllure,
      nameIdeas,
      avoidedConnotations,
      blankImagination,
    };
    setForm(data);
  }, [
    brandNameScale,
    competitors,
    likedCompetitorNames,
    dislikedCompetitorNames,
    meaningAssociation,
    desiredAllure,
    nameIdeas,
    avoidedConnotations,
    blankImagination,
  ]);

  useEffect(() => {
    setFormDetails();
  }, [setFormDetails]);

  const setDataFromLocalStorage = useCallback(() => {
    const data = getItem();
    if (data) {
      setBrandNameScale(data.brandNameScale);
      setCompetitors(data.competitors);
      setLikedCompetitorNames(data.likedCompetitorNames);
      setDislikedCompetitorNames(data.dislikedCompetitorNames);
      setMeaningAssociation(data.meaningAssociation);
      setDesiredAllure(data.desiredAllure);
      setIdeas(data.nameIdeas);
      setAvoidedConnotations(data.avoidedConnotations);
      setBlankImagination(data.blankImagination);
    }
  }, []);

  useEffect(() => {
    setDataFromLocalStorage();
  }, [setDataFromLocalStorage]);

  return (
    <>
      <div id="fourthpage" className={styles["firstpart-4"]}>
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
                onInputChange={setBrandNameScale}
                value={brandNameScale}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Global / Local"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Global"}
                finalText={"Local"}
                onInputChange={setBrandNameScale}
                value={brandNameScale}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Formal / Friendly"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Formal"}
                finalText={"Friendly"}
                onInputChange={setBrandNameScale}
                value={brandNameScale}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Modern / Traditional"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Modern"}
                finalText={"Traditional"}
                onInputChange={setBrandNameScale}
                value={brandNameScale}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Emotional / Logical"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Emotional"}
                finalText={"Logical"}
                onInputChange={setBrandNameScale}
                value={brandNameScale}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Scientific / General"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Scientific"}
                finalText={"General"}
                onInputChange={setBrandNameScale}
                value={brandNameScale}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Whimsical / Serious"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Whimsical"}
                finalText={"Serious"}
                onInputChange={setBrandNameScale}
                value={brandNameScale}
              />
            </div>
            <div className={styles["radio"]}>
              <Circle
                question={"Mature / Youthful"}
                options={["1", "2", "3", "4", "5"]}
                initialText={"Mature"}
                finalText={"Youthful"}
                onInputChange={setBrandNameScale}
                value={brandNameScale}
              />
            </div>
          </div>
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={
              "List your competitors (mention website links if available)"
            }
            onInputChange={setCompetitors}
            value={competitors}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"Competitor/other brand names you like"}
            onInputChange={setLikedCompetitorNames}
            value={likedCompetitorNames}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            onInputChange={setDislikedCompetitorNames}
            question={"Competitor/other brand names you dislike"}
            value={dislikedCompetitorNames}
          />
        </div>
        <div className={styles["secondpart-9d"]}>
          <TgQuestion
            setMeaningAssociation={setMeaningAssociation}
            meaningAssociation={meaningAssociation}
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
            onInputChange={setDesiredAllure}
            value={desiredAllure}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"Emotions or ideas you want the name to evoke?"}
            onInputChange={setIdeas}
            value={nameIdeas}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            question={"Connotations or ideas you want to completely avoid?"}
            onInputChange={setAvoidedConnotations}
            value={avoidedConnotations}
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "Imagine you're painting. You have no reference and you're in an empty room with no window. What will you draw on your canvas?"
            }
            onInputChange={setBlankImagination}
            value={blankImagination}
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
