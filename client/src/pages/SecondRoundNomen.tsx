import React, { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import { IoLockClosed } from "react-icons/io5";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import client from "../utils/sanity-client";
import SecondroundStepper from "../components/SecondRoundStepper";
import Button from "../components/Button";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const styles = require("../styles/nomen.module.css").default;

const SecondRoundNomen = () => {
  const SamplesImage = useRef<any>(null);
  const GraphImage = useRef<any>(null);
  const [nameDetais, setNameDetais] = useState<any>({});
  const [allNamesDetais, setAllNamesDetais] = useState<any>({});
  const [currentFormPage, setCurrentFormPage] = useState<any>(1);
  const [currentData, setCurrentData] = useState(1);

  const navigation = useNavigate();

  const handleNextButtonClick = () => {
    setCurrentFormPage(currentFormPage + 1);
    if (currentData >= 2) {
      navigation("/second-round-review");
    }
    setCurrentData((prev) => prev + 1);
  };

  const handlePreviousButtonClick = () => {
    setCurrentFormPage(currentFormPage - 1);
    if (currentData < 2) {
      return;
    }
    setCurrentData((prev) => prev - 1);
  };

  const query = `*[_type == "NameDetails"  ]{
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
      Dropdown
    }`;

  const getAudioPageData = useCallback(
    (currentData: any) => {
      client
        .fetch(query)
        .then((users) => {
          GraphImage.current = users[currentData].GraphImage;
          SamplesImage.current = users[currentData].SamplesImage;
          console.log(users[currentData]);
          setNameDetais(users[currentData]);
          setAllNamesDetais(users);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    [query]
  );
  const handleNomenButtonClick = (number: any) => {
    setCurrentData(number);
  };

  useEffect(() => {
    getAudioPageData(currentData);
  }, [getAudioPageData, currentData]);

  return (
    <>
      <div className={styles["review"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs show={3} />
            </SideBar>
          </div>
          <div className={styles["nomen-hero-container"]}>
            <SecondroundStepper
              isDisabled={0}
              currentPage={"Home"}
              handleNomenButtonClick={handleNomenButtonClick}
            />
            <section className={styles["nomen-name-container"]}>
              <div className={styles["nomen-leftpart"]}>
                <div className={styles["name"]}>
                  <h1>{nameDetais.Name}</h1>
                </div>
                <ul>
                  {nameDetais.MultilingualNames &&
                    Object.keys(nameDetais.MultilingualNames).map(
                      (key: any) => {
                        return (
                          <>
                            <li>{nameDetais.MultilingualNames[key]}</li>
                          </>
                        );
                      }
                    )}
                </ul>
                <p>{nameDetais.Related}</p>
              </div>
              <div className={styles["nomen-rightpart"]}>
                <div className={styles["top-part"]}>
                  <div className={styles["values"]}>{nameDetais.Dropdown}</div>
                  <div className={styles["syllables"]}>
                    <p>
                      <span>{nameDetais.Syllable}</span> Syllables
                    </p>
                  </div>
                  <div className={styles["available-domains"]}>
                    <p>
                      {nameDetais.DomainExtensions &&
                      nameDetais.DomainExtensions.includes(".com") ? (
                        <IoMdRadioButtonOn />
                      ) : (
                        <IoMdRadioButtonOff />
                      )}
                      <span>.com</span>
                    </p>
                    <p>
                      {nameDetais.DomainExtensions &&
                      nameDetais.DomainExtensions.includes(".in") ? (
                        <IoMdRadioButtonOn />
                      ) : (
                        <IoMdRadioButtonOff />
                      )}
                      <span>.in</span>
                    </p>
                  </div>
                </div>
                <div className={styles["bottom-part"]}>
                  <p>
                    <span></span>
                    The rhythmic repitition of ‘u’ ‘a’ and ‘n’ sounds offer a
                    sense of fluidity, softness, pleasantness and positivity
                  </p>
                </div>
              </div>
            </section>
            <section className={styles["name-info"]}>
              {nameDetais.NameBenefits &&
                Object.keys(nameDetais.NameBenefits).map((key: any) => {
                  return (
                    <>
                      <p>+ {nameDetais.NameBenefits[key]}</p>
                    </>
                  );
                })}
            </section>
            <div className={styles["names-more-details"]}>
              <div className={styles["firstpart"]}>
                <div className={styles["chatbox"]}>
                  <div className={styles["container"]}>
                    <img
                      src={require("../assets/images/chatbox-1.png")}
                      alt={"alt"}
                    />
                    <div className={styles["text-container"]}>
                      <p>
                        {nameDetais.ChatDescription &&
                          nameDetais.ChatDescription.Chatbox1}
                      </p>
                    </div>
                  </div>
                  <div className={styles["container"]}>
                    <img
                      src={require("../assets/images/chatbox-2.png")}
                      alt={"alt"}
                    />
                    <div className={styles["text-container"]}>
                      <p>
                        {nameDetais.ChatDescription &&
                          nameDetais.ChatDescription.Chatbox2}
                      </p>
                    </div>
                  </div>
                  <div className={styles["container"]}>
                    <img
                      src={require("../assets/images/chatbox-3.png")}
                      alt={"alt"}
                    />
                    <div className={styles["text-container"]}>
                      <p>
                        {nameDetais.ChatDescription &&
                          nameDetais.ChatDescription.Chatbox3}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles["domains-preview"]}>
                  <h4>DOMAINS</h4>
                  <div className={styles["domain-box"]}>
                    <p>
                      <span>
                        <IoLockClosed />
                      </span>
                      {nameDetais.Domains && nameDetais.Domains.Domain1}
                    </p>
                  </div>
                  <div className={styles["domain-box"]}>
                    <p>
                      <span>
                        <IoLockClosed />
                      </span>
                      {nameDetais.Domains && nameDetais.Domains.Domain2}
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles["middlepart"]}>
                <div className={styles["name-availability"]}>
                  <h4>LLP NAME AVAILABILITY</h4>
                  <div className={styles["availability-info"]}>
                    <h5>{nameDetais.LLPNameAvailability}</h5>
                    <p>(As per Ministry of Commerce LLP Database)</p>
                  </div>
                </div>
                <div className={styles["graph-image"]}>
                  <img ref={GraphImage} src={`${GraphImage.current}`} alt="" />
                </div>
              </div>
              <div className={styles["lastpart"]}>
                <div className={styles["trademarkability"]}>
                  <div className={styles["trademarkability-content"]}>
                    <p>TRADEMARKABILITY</p>
                    <h5>CLASS 29,30,31,32</h5>
                  </div>
                  <div className={styles["availability-info"]}>
                    <h5>{nameDetais.Trademarkability}</h5>
                    <p>(As per Ministry of Commerce LLP Database)</p>
                  </div>
                </div>
                <div className={styles["name-product-preview"]}>
                  <img
                    ref={SamplesImage}
                    src={`${SamplesImage.current}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: currentFormPage === 5 ? "none" : "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
              className={styles["nameset-2-arrows"]}
            >
              <div className="btn_1">
                <Button
                  handleClick={handlePreviousButtonClick}
                  buttonValue={<FaLessThan />}
                />
              </div>
              <div className="btn_2">
                <Button
                  handleClick={handleNextButtonClick}
                  buttonValue={<FaGreaterThan />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondRoundNomen;
