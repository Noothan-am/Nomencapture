import { useCallback, useEffect, useState } from "react";
import DescriptionQuestions from "../../components/DescriptionQuestions";
import RadioQuestions from "../../components/RadioQuestions";
import SelectQuestions from "../../components/SelectQuestions";
import TextQuestions from "../../components/TextQuestions";
const styles = require("../../styles/forms.module.css").default;

const selectOptions = [
  "Accounting",
  "Airlines/Aviation",
  "Alternative Dispute Resolution",
  "Alternative Medicine",
  "Animation",
  "Apparel/Fashion",
  "Architecture/Planning",
  "Arts/Crafts",
  "Automotive",
  "Aviation/Aerospace",
  "Banking/Mortgage",
  "Biotechnology/Greentech",
  "Broadcast Media",
  "Building Materials",
  "Business Supplies/Equipment",
  "Capital Markets/Hedge Fund/Private Equity",
  "Chemicals",
  "Civic/Social Organization",
  "Civil Engineering",
  "Commercial Real Estate",
  "Computer Games",
  "Computer Hardware",
  "Computer Networking",
  "Computer Software/Engineering",
  "Computer/Network Security",
  "Construction",
  "Consumer Electronics",
  "Consumer Goods",
  "Consumer Services",
  "Cosmetics",
  "Dairy",
  "Defense/Space",
  "Design",
  "E-Learning",
  "Education Management",
  "Electrical/Electronic Manufacturing",
  "Entertainment/Movie Production",
  "Environmental Services",
  "Events Services",
  "Executive Office",
  "Facilities Services",
  "Farming",
  "Financial Services",
  "Fine Art",
  "Fishery",
  "Food Production",
  "Food/Beverages",
  "Fundraising",
  "Furniture",
  "Gambling/Casinos",
  "Glass/Ceramics/Concrete",
  "Government Administration",
  "Government Relations",
  "Graphic Design/Web Design",
  "Health/Fitness",
  "Higher Education/Acadamia",
  "Hospital/Health Care",
  "Hospitality",
  "Human Resources/HR",
  "Import/Export",
  "Individual/Family Services",
  "Industrial Automation",
  "Information Services",
  "Information Technology/IT",
  "Insurance",
  "International Affairs",
  "International Trade/Development",
  "Internet",
  "Investment Banking/Venture",
  "Investment Management/Hedge Fund/Private Equity",
  "Judiciary",
  "Law Enforcement",
  "Law Practice/Law Firms",
  "Legal Services",
  "Legislative Office",
  "Leisure/Travel",
  "Library",
  "Logistics/Procurement",
  "Luxury Goods/Jewelry",
  "Machinery",
  "Management Consulting",
  "Maritime",
  "Market Research",
  "Marketing/Advertising/Sales",
  "Mechanical or Industrial Engineering",
  "Media Production",
  "Medical Equipment",
  "Medical Practice",
  "Mental Health Care",
  "Military Industry",
  "Mining/Metals",
  "Motion Pictures/Film",
  "Museums/Institutions",
  "Music",
  "Nanotechnology",
  "Newspapers/Journalism",
  "Non-Profit/Volunteering",
  "Oil/Energy/Solar/Greentech",
  "Online Publishing",
  "Other Industry",
  "Outsourcing/Offshoring",
  "Package/Freight Delivery",
  "Packaging/Containers",
  "Paper/Forest Products",
  "Performing Arts",
  "Pharmaceuticals",
  "Philanthropy",
  "Photography",
  "Plastics",
  "Political Organization",
  "Primary/Secondary Education",
  "Printing",
  "Professional Training",
  "Program Development",
  "Public Relations/PR",
  "Public Safety",
  "Publishing Industry",
  "Railroad Manufacture",
  "Ranching",
  "Real Estate/Mortgage",
  "Recreational Facilities/Services",
  "Religious Institutions",
  "Renewables/Environment",
  "Research Industry",
  "Restaurants",
  "Retail Industry",
  "Security/Investigations",
  "Semiconductors",
  "Shipbuilding",
  "Sporting Goods",
  "Sports",
  "Staffing/Recruiting",
  "Supermarkets",
  "Telecommunications",
  "Textiles",
  "Think Tanks",
  "Tobacco",
  "Translation/Localization",
  "Transportation",
  "Utilities",
  "Venture Capital/VC",
  "Veterinary",
  "Warehousing",
  "Wholesale",
  "Wine/Spirits",
  "Wireless",
  "Writing/Editing",
];

function ClientFormFirstPage({ allUsersData, usermail }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [goToPlace, setGoToPlace] = useState("");
  const [naming, setNaming] = useState({});
  const [productDescription, setProductDescription] = useState("");
  const [productSector, setProductSector] = useState("");
  const [trademark, setTrademark] = useState("");

  const setDataFromLocalStorage = useCallback(() => {
    // if (allUsersData) {
    // const value = allUsersData[usermail];
    if (allUsersData) {
      setName(allUsersData["Your Name"]);
      setEmail(allUsersData["Your Email"]);
      setGoToPlace(allUsersData["Your favourite go to place for peace?"]);
      setNaming(allUsersData["What are we naming?"]);
      setProductDescription(allUsersData["Describe your Product/Service?"]);
      setProductSector(
        allUsersData["Which sector does your product / service belong to?"]
      );
      setTrademark(
        allUsersData[
          "Mention the Trademark classes your product/service belongs to?"
        ]
      );
      // }
    }
  }, []);

  useEffect(() => {
    setDataFromLocalStorage();
  }, [setDataFromLocalStorage]);

  return (
    <>
      <div className={styles["firstpart"]}>
        <div className={styles["name"]}>
          <TextQuestions value={name} question={"Your Name"} disabled={true} />
        </div>
        <div className={styles["email"]}>
          <TextQuestions
            value={email}
            question={"Your Email"}
            disabled={true}
          />
        </div>
        <div className={styles["radio"]}>
          <RadioQuestions
            value={naming}
            question={"What are we naming?"}
            options={["Product", "Service"]}
            showOthersInput={true}
            disabled={true}
          />
        </div>
        <div className={styles["select"]}>
          <SelectQuestions
            value={productSector}
            question={"Which sector does your product / service belong to?"}
            options={selectOptions}
            disabled={true}
          />
        </div>
        <div className={styles["trademark"]}>
          <TextQuestions
            value={trademark}
            showLink={true}
            disabled={true}
            question={
              "Mention the Trademark classes your product/service belongs to?"
            }
          />
        </div>
        <div className={styles["textarea"]}>
          <DescriptionQuestions
            disabled={true}
            question={"Describe your Product/Service?"}
            description={
              "Ex: Grammarly is a cloud-based typing assistant that reviews spelling, grammar, punctuation, clarity, engagement, and delivery mistakes. It uses artificial intelligence to identify and search for an appropriate replacement for the error it locates."
            }
            value={productDescription}
          />
        </div>
        <div className={styles["name"]}>
          <TextQuestions
            disabled={true}
            value={goToPlace}
            question={"Your favorite go to place for peace?"}
          />
        </div>
      </div>
    </>
  );
}

export default ClientFormFirstPage;
