import React, { useCallback, useEffect } from "react";
import TextQuestions from "../../components/TextQuestions";
import RadioQuestions from "../../components/RadioQuestions";
import DescriptionQuestions from "../../components/DescriptionQuestions";
import SelectQuestions from "../../components/SelectQuestions";
import CheckBoxQuestions from "../../components/CheckBoxQuestions";
const styles = require("../../styles/forms.module.css").default;

const selectOptions = [
  "Accounting",
  "Airlines/Aviation",
  "Alternative Dispute Resolution",
  "Alternative Medicine",
  "Animation",
  "Apparel/Fashion",
  "Architecture/Planning",
];

function ClientThirdFormPage({ allUsersData }: any) {
  const [targetAudienceAge, setTargetAudienceAge] = React.useState([]);
  const [hero, setHero] = React.useState("");
  const [targetAudienceGender, setTargetAudienceGender] = React.useState({});
  const [targetAudienceInfo, setTargetAudienceInfo] = React.useState("");
  const [memorableImpression, setMemorableImpression] = React.useState([]);
  const [targetAudienceExpectation, setTargetAudienceExpectation] =
    React.useState("");
  const [productAvailability, setProductAvailability] = React.useState([]);
  const [productPurchaseFrequency, setProductPurchaseFrequency] =
    React.useState({});
  const [targetAudienceOccupation, setTargetAudienceOccupation] =
    React.useState([]);

  const setDataFromLocalStorage = useCallback(() => {
    if (allUsersData) {
      setTargetAudienceAge(
        allUsersData[
          "What is the age bracket of your Target Audience Group (TG)?"
        ]
      );
      setHero(allUsersData["A hero you look upto?"]);
      setTargetAudienceGender(
        JSON.parse(
          allUsersData["Which gender of TG is your product / service for?"]
        )
      );
      setTargetAudienceInfo(
        allUsersData["Do you have any additional information about your TG?"]
      );
      setMemorableImpression(
        allUsersData["How do want your customers to remember you as"]
      );
      setTargetAudienceExpectation(
        allUsersData[
          "For what values you want your TG to choose you over the competitor?"
        ]
      );
      setProductAvailability(
        allUsersData["Where will your TG find your product / service?"]
      );
      setProductPurchaseFrequency(
        JSON.parse(
          allUsersData["How often do you think your product will be purchased?"]
        )
      );
      setTargetAudienceOccupation(
        allUsersData["What occupation your TG may have?"]
      );
    }
  }, []);

  useEffect(() => {
    setDataFromLocalStorage();
  }, [setDataFromLocalStorage]);

  return (
    <>
      <div id="thirdform" className={styles["firstpart-3"]}>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            disabled={true}
            showSubHeading={false}
            question={
              "What is the age bracket of your Target Audience Group (TG)?"
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
            onInputChange={setTargetAudienceAge}
            value={targetAudienceAge}
          />
        </div>
        <div className={styles["radio"]}>
          <RadioQuestions
            disabled={true}
            question={"Which gender of TG is your product / service for?"}
            options={["All", "Men", "Women"]}
            showOthersInput={true}
            onInputChange={setTargetAudienceGender}
            value={targetAudienceGender}
          />
        </div>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            disabled={true}
            showSubHeading={false}
            question={"What occupation your TG may have?"}
            options={[
              "Everyone",
              "Students",
              "General Working Adults",
              "Young/ CEOs",
              "Founders",
              "Large Company Decision Makers (Corporate C Level)",
              "Salaried Employees",
              "Self-Employed",
              "Retired Elders",
            ]}
            onInputChange={setTargetAudienceOccupation}
            value={targetAudienceOccupation}
          />
        </div>
        <div className={styles["radio"]}>
          <RadioQuestions
            disabled={true}
            question={"How often do you think your product will be purchased?"}
            options={[
              "Periodic / Subscription based",
              "Frequently",
              "Rarely",
              "One time",
            ]}
            onInputChange={setProductPurchaseFrequency}
            showOthersInput={false}
            value={productPurchaseFrequency}
          />
        </div>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            showSubHeading={false}
            disabled={true}
            question={"Where will your TG find your product / service?"}
            options={[
              "Retail Outlets",
              "Social Media",
              "E-Commerce Platform / App",
              "Directly on Website",
              "Other",
            ]}
            onInputChange={setProductAvailability}
            value={productAvailability}
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            disabled={true}
            question={
              "For what values you want your TG to choose you over the competitor?"
            }
            onInputChange={setTargetAudienceExpectation}
            value={targetAudienceExpectation}
          />
        </div>
        <div className={styles["text-2"]}>
          <CheckBoxQuestions
            showSubHeading={false}
            disabled={true}
            question={"How do want your customers to remember you as"}
            options={[
              "Straightforward and trustworthy",
              "Like a good friend to them.",
              "Pioneers in our field.",
              "Cutting-edge and innovative.",
              "A group of miracle-workers.",
              "Helpful and service-minded.",
              "Other",
            ]}
            onInputChange={setMemorableImpression}
            value={memorableImpression}
          />
        </div>
        <div className={styles["radio"]}>
          <DescriptionQuestions
            disabled={true}
            question={"Do you have any additional information about your TG?"}
            description={"(Desires, Interests etc.)"}
            onInputChange={setTargetAudienceInfo}
            value={targetAudienceInfo}
          />
        </div>
        <div className={styles["radio"]}>
          <TextQuestions
            disabled={true}
            question={"A hero you look up to?"}
            onInputChange={setHero}
            value={hero}
          />
        </div>
      </div>
    </>
  );
}

export default ClientThirdFormPage;
