import { useCallback, useEffect, useRef, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FlagStepper from "../components/FlagStepper";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import NameList from "./NameList";
import Nomen from "./Nomen";
import client from "../utils/sanity-client";
import { useLocalStorageForUserDetails } from "../hooks/useLocalStorage";

const styles = require("../styles/naming-set.module.css").default;

function NamingSet() {
  const [currentFormPage, setCurrentFormPage] = useState(1);
  const [currentData, setCurrentData] = useState(0);
  const SamplesImage = useRef<any>(null);
  const GraphImage = useRef<any>(null);
  const [name, setNameDetais] = useState<any>({});
  const [allNamesDetais, setAllNamesDetais] = useState<any>({});
  const { getItem }: any = useLocalStorageForUserDetails();
  const userData = getItem();
  const { email } = userData.user;

  const navigate = useNavigate();
  const handleNomenButtonClick = (number: any) => {
    setCurrentData(number);
  };

  const handleNextButtonClick = () => {
    setCurrentFormPage(currentFormPage + 1);
  };

  const handlePreviousButtonClick = () => {
    setCurrentFormPage(currentFormPage - 1);
  };

  const query = `*[_type == "NameDetails" && User->Email == "${email}" && Round == 1 ]{
      Name,
      Related,
      Syllable,
      NameDescription,
      LLPNameAvailability,
      Trademarkability,
      "GraphImage": GraphImage.asset->url,
      "SamplesImage": SamplesImage.asset->url,
      MultilingualNames,
      NameBenefits,
      ChatDescription,
      DomainExtensions,
      Domains,
      Dropdown,
      Round
    }`;

  const getAudioPageData = useCallback(
    (currentData: any) => {
      client
        .fetch(query)
        .then((users) => {
          console.log({ users });

          console.log(users[currentData]);

          GraphImage.current = users[currentData].GraphImage;
          SamplesImage.current = users[currentData].SamplesImage;
          setNameDetais(users[currentData]);
          setAllNamesDetais(users);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    [query]
  );

  useEffect(() => {
    getAudioPageData(currentData);
  }, [getAudioPageData, currentData]);

  const currentPage = () => {
    switch (currentFormPage) {
      case 1:
        return <NameList />;
      case 2:
        return (
          <Nomen
            currentData={name}
            GraphImage={GraphImage}
            SamplesImage={SamplesImage}
            allNamesDetais={allNamesDetais}
          />
        );
      case 3:
        navigate("/review");
        return;
    }
  };
  return (
    <>
      <div className={styles["naming-set"]}>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs show={currentFormPage >= 3 ? currentFormPage + 1 : 3} />
            </SideBar>
          </div>
          <div className={styles["naming-set-container"]}>
            <div className={styles["navbar"]}>
              <Navbar />
            </div>

            <div className={styles["div"]}>
              <div className={styles["stepper"]}>
                <FlagStepper
                  totalNames={3}
                  isDisabled={currentFormPage}
                  currentPage={currentFormPage === 1 ? "Home" : ""}
                  handleNomenButtonClick={handleNomenButtonClick}
                />
              </div>
              <div
                style={{
                  display: currentFormPage === 5 ? "none" : "flex",
                }}
                className={styles["nameset-2-arrows"]}
              >
                <button onClick={handlePreviousButtonClick}>
                  <FaLessThan />
                </button>
                <button onClick={handleNextButtonClick}>
                  <FaGreaterThan />
                </button>
              </div>
              <div className={styles["form-content"]}>{currentPage()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NamingSet;
