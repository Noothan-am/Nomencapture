import React, { useCallback, useEffect, useState } from "react";
import TextQuestions from "../components/TextQuestions";
import RadioQuestions from "../components/RadioQuestions";
import DescriptionQuestions from "../components/DescriptionQuestions";
import SelectQuestions from "../components/SelectQuestions";
import CheckBoxQuestions from "../components/CheckBoxQuestions";
import useLocalStorage from "../hooks/useLocalStorage";
import useFormData from "../context/FormContext";
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
  const [usp, setUsp] = useState("");
  const [dressColor, setDressColor] = useState("");
  const [productCater, setProductCater] = useState("");
  const [productValues, setProductValues] = useState("");
  const [productImpact, setProductImpact] = useState("");
  const [productSegment, setProductSegment] = useState("");
  const [productLikeness, setProductLikeness] = useState([]);
  const [productExpansion, setProductExpansion] = useState("");
  const [lastPhotoDetails, setLastPhotoDetails] = useState("");
  const [productUnLikeness, setProductUnLikeness] = useState([]);
  const [productAchievement, setProductAchievement] = useState("");
  const [productImpactAsPerson, setProductImpactAsPerson] = useState("");

  const { getItem } = useLocalStorage();
  const { form, setForm }: any = useFormData();

  const setFormDetails = useCallback(() => {
    const data = {
      ...form,
      productCater,
      usp,
      productSegment,
      productExpansion,
      lastPhotoDetails,
      productLikeness,
      productUnLikeness,
      dressColor,
      productImpactAsPerson,
      productAchievement,
      productImpact,
      productValues,
    };
    setForm(data);
  }, [
    productCater,
    usp,
    productSegment,
    productExpansion,
    lastPhotoDetails,
    productLikeness,
    productUnLikeness,
    dressColor,
    productImpactAsPerson,
    productAchievement,
    productImpact,
    productValues,
  ]);

  useEffect(() => {
    setFormDetails();
  }, [setFormDetails]);

  const setDataFromLocalStorage = useCallback(() => {
    const data = getItem();
    if (data) {
      setProductCater(data.productCater);
      setUsp(data.usp);
      setProductSegment(data.productSegment);
      setProductExpansion(data.productExpansion);
      setLastPhotoDetails(data.lastPhotoDetails);
      setProductLikeness(data.productLikeness);
      setProductUnLikeness(data.productUnLikeness);
      setDressColor(data.dressColor);
      setProductImpactAsPerson(data.productImpactAsPerson);
      setProductAchievement(data.productAchievement);
      setProductImpact(data.productImpact);
      setProductValues(data.productValues);
    }
  }, []);

  useEffect(() => {
    setDataFromLocalStorage();
  }, [setDataFromLocalStorage]);

  return (
    <>
      <div className={styles["firstpart-2"]}>
        <div className={styles["email"]}>
          <TextQuestions
            question={"What need does your product / service cater to?"}
            onInputChange={setProductCater}
            value={productCater}
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={"What is your USP?"}
            onInputChange={setUsp}
            value={usp}
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
          onInputChange={setProductSegment}
          value={productSegment}
        />
        <div className={styles["radio"]}>
          <DescriptionQuestions
            question={
              "Do you see yourself expanding to other cities/states in future? If yes, where?"
            }
            onInputChange={setProductExpansion}
            value={productExpansion}
          />
        </div>
        <div className={styles["email"]}>
          <TextQuestions
            question={
              "If your product / service were a person, list the values or beliefs it will always stand by? "
            }
            onInputChange={setProductValues}
            value={productValues}
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
            onInputChange={setProductImpact}
            value={productImpact}
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
            onInputChange={setProductAchievement}
            value={productAchievement}
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
            onInputChange={setProductImpactAsPerson}
            showOthersInput={true}
            value={productImpactAsPerson}
          />
        </div>
        <div className={styles["email"]}>
          <TextQuestions
            question={"What is the color of the dress you wore yesterday?"}
            onInputChange={setDressColor}
            value={dressColor}
          />
        </div>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            question={
              "If your product / service were a person, how would you definitely like it to come across as?"
            }
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
            question={
              "If your product / service were a person, how would you definitely not like it to come across as?"
            }
            onInputChange={setProductUnLikeness}
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
            question={"What was the object you last took a photo of?"}
            onInputChange={setLastPhotoDetails}
            value={lastPhotoDetails}
          />
        </div>
      </div>
    </>
  );
}

export default SecondFormPage;
