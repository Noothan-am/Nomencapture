import { useCallback, useEffect, useState } from "react";
import CheckBoxQuestions from "../../components/CheckBoxQuestions";
import DescriptionQuestions from "../../components/DescriptionQuestions";
import RadioQuestions from "../../components/RadioQuestions";
import TextQuestions from "../../components/TextQuestions";
const styles = require("../../styles/forms.module.css").default;

function ClientSecondFormPage({ allUsersData }: any) {
  const [usp, setUsp] = useState("");
  const [dressColor, setDressColor] = useState("");
  const [productCater, setProductCater] = useState("");
  const [productValues, setProductValues] = useState("");
  const [productImpact, setProductImpact] = useState("");
  const [productSegment, setProductSegment] = useState({});
  const [productLikeness, setProductLikeness] = useState([]);
  const [productExpansion, setProductExpansion] = useState("");
  const [lastPhotoDetails, setLastPhotoDetails] = useState("");
  const [productUnLikeness, setProductUnLikeness] = useState([]);
  const [productAchievement, setProductAchievement] = useState("");
  const [productImpactAsPerson, setProductImpactAsPerson] = useState({});
  const [productFocusOnCity, setProductFocusOnCity] = useState("");

  const setDataFromLocalStorage = useCallback(() => {
    window.location.hash = "#secondform";
    if (allUsersData) {
      setProductCater(
        allUsersData["What need does your product / service cater to?"]
      );
      setUsp(
        allUsersData[
          "What do you think is the differentiating value you provide / What is your USP?"
        ]
      );
      setProductSegment(
        allUsersData["What price segment does your product/service fall in?"]
      );
      setProductExpansion(
        allUsersData[
          "Do you see yourself expanding to other cities/regions in future? If yes, where?"
        ]
      );
      setLastPhotoDetails(
        allUsersData["What was the object you last took a photo of?"]
      );
      setProductLikeness(
        allUsersData[
          "If your product / service were a person, how would you definitely like it to come across as?"
        ]
      );
      setProductUnLikeness(
        allUsersData[
          "If your product / service were a person, how would you definitely not like it to come across as?"
        ]
      );
      setDressColor(
        allUsersData["What is the color of the dress you wore yesterday?"]
      );
      setProductImpactAsPerson(
        allUsersData[
          "If your product / service were a person, what kind of impact it would want to create?"
        ]
      );
      setProductAchievement(
        allUsersData[
          "How do you think your product / service can achieve the above?"
        ]
      );
      setProductImpact(
        allUsersData[
          "What is the ultimate impact you want to create with your product / service? Or WHY does your product / service exist?"
        ]
      );
      setProductValues(
        allUsersData[
          "If your product / service were a person, list the values or beliefs it will always stand by?"
        ]
      );
      setProductFocusOnCity(
        allUsersData[
          "Do you see yourself expanding to other cities/regions in future? If yes, where?"
        ]
      );
    }
  }, []);

  useEffect(() => {
    setDataFromLocalStorage();
  }, [setDataFromLocalStorage]);

  return (
    <>
      <div id="secondform" className={styles["firstpart-2"]}>
        <div className={styles["email"]}>
          <TextQuestions
            question={"What need does your product / service cater to?"}
            onInputChange={setProductCater}
            disabled={true}
            value={productCater}
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            disabled={true}
            question={
              "What do you think is the differentiating value you provide / What is your USP?"
            }
            onInputChange={setUsp}
            value={usp}
          />
        </div>
        <RadioQuestions
          disabled={true}
          question={"What price segment does your product/service fall in?"}
          options={[
            "Mass (Affordable)",
            "Niche (Premium - Affordable)",
            "Premium",
            "Luxury",
          ]}
          showOthersInput={false}
          onInputChange={setProductSegment}
          value={productSegment}
        />
        <div className={styles["radio"]}>
          <DescriptionQuestions
            disabled={true}
            question={
              "What are the cities/regions you're planning to focus on?"
            }
            onInputChange={setProductFocusOnCity}
            value={productFocusOnCity}
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            disabled={true}
            question={
              "Do you see yourself expanding to other cities/regions in future? If yes, where?"
            }
            onInputChange={setProductExpansion}
            value={productExpansion}
          />
        </div>
        <div className={styles["email"]}>
          <DescriptionQuestions
            disabled={true}
            question={
              "If your product / service were a person, list the values or beliefs it will always stand by?"
            }
            onInputChange={setProductValues}
            value={productValues}
          />
        </div>
        <div className={styles["textarea"]}>
          <DescriptionQuestions
            disabled={true}
            question={
              "What is the ultimate impact you want to create with your product / service? Or WHY does your product / service exist?"
            }
            description={
              "Ex. This would be Google's response: To provide access to the world’s information in one click"
            }
            onInputChange={setProductImpact}
            value={productImpact}
          />
        </div>
        <div className={styles["textarea"]}>
          <DescriptionQuestions
            disabled={true}
            question={
              "How do you think your product / service can achieve the above?"
            }
            description={
              "Ex. This would be Google's response: To organize the world’s information and make it universally accessible and useful"
            }
            onInputChange={setProductAchievement}
            value={productAchievement}
          />
        </div>
        <div className={styles["email"]}>
          <RadioQuestions
            disabled={true}
            question={
              "If your product / service were a person, what kind of impact it would want to create?"
            }
            options={[
              "Leave a lasting mark on peoples' lives",
              "Provide structure for the workings of the world",
              "Connect with people, be a partner",
              "Lead, inform and educate",
            ]}
            onInputChange={setProductImpactAsPerson}
            showOthersInput={true}
            value={productImpactAsPerson}
          />
        </div>
        <div className={styles["email"]}>
          <TextQuestions
            disabled={true}
            question={"What is the color of the dress you wore yesterday?"}
            onInputChange={setDressColor}
            value={dressColor}
          />
        </div>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            disabled={true}
            question={
              "If your product / service were a person, how would you DECENTLY LIKE it to come across as?"
            }
            showSubHeading={true}
            onInputChange={setProductLikeness}
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
              "Knowledgeable",
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
            value={productLikeness}
          />
        </div>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            disabled={true}
            question={
              "If your product / service were a person, how would you DECENTLY NOT LIKE it to come across as?"
            }
            onInputChange={setProductUnLikeness}
            showSubHeading={true}
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
              "Knowledgeable",
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
            value={productUnLikeness}
          />
        </div>
        <div className={styles["email"]}>
          <TextQuestions
            disabled={true}
            question={"What was the object you last took a photo of?"}
            onInputChange={setLastPhotoDetails}
            value={lastPhotoDetails}
          />
        </div>
      </div>
    </>
  );
}

export default ClientSecondFormPage;
