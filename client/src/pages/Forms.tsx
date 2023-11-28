import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import TextQuestions from "../components/TextQuestions";
import SelectQuestions from "../components/SelectQuestions";
import RadioQuestions from "../components/RadioQuestions";
import Button from "../components/Button";
import DescriptionQuestions from "../components/DescriptionQuestions";
// import CheckBoxQuestions from "../components/CheckBoxQuestions";
const styles = require("../styles/forms.module.css").default;

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
function Forms() {
  return (
    <>
      <div className={styles["forms"]}>
        <div className="navbar">
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className="sidebar">
            <SideBar>
              <Tabs />
            </SideBar>
          </div>
          <div className="forms-container">
            <div className={styles["div"]}>
              <TextQuestions question={"Your Name"} />
              <TextQuestions question={"Your Email"} />
              <SelectQuestions
                question={"Which sector does your product / service belong to?"}
                options={selectOptions}
              />
              <RadioQuestions
                question={"What are we naming?"}
                options={["Product", "Service"]}
              />
              <DescriptionQuestions
                question={"Describe your Product/Service?"}
                description={
                  "Ex: Grammarly is a cloud-based typing assistant that reviews spelling, grammar, punctuation, clarity, engagement, and delivery mistakes. It uses artificial intelligence to identify and search for an appropriate replacement for the error it locates."
                }
              />
              <TextQuestions
                question={
                  "Mention the Trademark classes your product/service belongs to? "
                }
              />
            </div>
            <div className="forms-next-button">
              <Button buttonValue={"NEXT"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forms;
