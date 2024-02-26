import { useCallback, useEffect, useRef, useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import client from "../../utils/sanity-client";
import { useParams } from "react-router-dom";
import { useAllNamesData } from "../../context/AllNamesDataContext";

const styles = require("../styles/name.module.css").default;

const Name = () => {
  const SamplesImage = useRef<any>(null);
  const GraphImage = useRef<any>(null);
  const [nameDetails, setNameDetais] = useState<any>({});

  const allNamesData: any = useAllNamesData();
  const { name }: any = useParams();

  useEffect(() => {
    const nameData = allNamesData.allNamesData[name];
    GraphImage.current = allNamesData.allNamesData[name].GraphImage;
    SamplesImage.current = allNamesData.allNamesData[name].SamplesImage;
    setNameDetais(nameData);
  }, [allNamesData, name]);

  // const query = `*[_type == "NameDetails" && Name == "${name}"]{
  //     Name,
  //     Related,
  //     Syllable,
  //     NameDescription,
  //     LLPNameAvailability,
  //     Trademarkability,
  //     "GraphImage": GraphImage.asset->url,
  //     "SamplesImage": SamplesImage.asset->url,
  //     MultilingualNames,
  //     NameBenefits,
  //     ChatDescription,
  //     DomainExtensions,
  //     Domains,
  //     Dropdown
  //   }`;

  // const getAudioPageData = useCallback(() => {
  //   client
  //     .fetch(query)
  //     .then((users) => {
  //       console.log("Users", users[0]);
  //       GraphImage.current = users[0].GraphImage;
  //       SamplesImage.current = users[0].SamplesImage;
  //       setNameDetais(users[0]);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching users:", error);
  //     });
  // }, [query]);

  // useEffect(() => {
  //   getAudioPageData();
  // }, [getAudioPageData]);

  return (
    <>
      <div className={styles["nomen-hero-container"]}>
        <section className={styles["nomen-name-container"]}>
          <div className={styles["nomen-leftpart"]}>
            <div className={styles["name"]}>
              <h1>{nameDetails.Name}</h1>
            </div>
            <ul>
              {nameDetails.MultilingualNames &&
                Object.keys(nameDetails.MultilingualNames).map((key: any) => {
                  return (
                    <>
                      <li>{nameDetails.MultilingualNames[key]}</li>
                    </>
                  );
                })}
            </ul>
            <p>{nameDetails.Related}</p>
          </div>
          <div className={styles["nomen-rightpart"]}>
            <div className={styles["top-part"]}>
              <div className={styles["values"]}>{nameDetails.Dropdown}</div>
              <div className={styles["syllables"]}>
                <p>
                  <span>{nameDetails.Syllable}</span> Syllables
                </p>
              </div>
              <div className={styles["available-domains"]}>
                <p>
                  {nameDetails.DomainExtensions &&
                  nameDetails.DomainExtensions.includes(".com") ? (
                    <IoMdRadioButtonOn />
                  ) : (
                    <IoMdRadioButtonOff />
                  )}
                  <span>.com</span>
                </p>
                <p>
                  {nameDetails.DomainExtensions &&
                  nameDetails.DomainExtensions.includes(".in") ? (
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
                The rhythmic repitition of ‘u’ ‘a’ and ‘n’ sounds offer a sense
                of fluidity, softness, pleasantness and positivity
              </p>
            </div>
          </div>
        </section>
        <section className={styles["name-info"]}>
          {nameDetails.NameBenefits &&
            Object.keys(nameDetails.NameBenefits).map((key: any) => {
              return (
                <>
                  <p>+ {nameDetails.NameBenefits[key]}</p>
                </>
              );
            })}
        </section>
        <div className={styles["names-more-details"]}>
          <div className={styles["firstpart"]}>
            <div className={styles["chatbox"]}>
              <div className={styles["container"]}>
                <img
                  src={require("../../assets/images/chatbox-1.png")}
                  alt={"alt"}
                />
                <div className={styles["text-container"]}>
                  <p>
                    {nameDetails.ChatDescription &&
                      nameDetails.ChatDescription.Chatbox1}
                  </p>
                </div>
              </div>
              <div className={styles["container"]}>
                <img
                  src={require("../../assets/images/chatbox-2.png")}
                  alt={"alt"}
                />
                <div className={styles["text-container"]}>
                  <p>
                    {nameDetails.ChatDescription &&
                      nameDetails.ChatDescription.Chatbox2}
                  </p>
                </div>
              </div>
              <div className={styles["container"]}>
                <img
                  src={require("../../assets/images/chatbox-3.png")}
                  alt={"alt"}
                />
                <div className={styles["text-container"]}>
                  <p>
                    {nameDetails.ChatDescription &&
                      nameDetails.ChatDescription.Chatbox3}
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
                  {nameDetails.Domains && nameDetails.Domains.Domain1}
                </p>
              </div>
              <div className={styles["domain-box"]}>
                <p>
                  <span>
                    <IoLockClosed />
                  </span>
                  {nameDetails.Domains && nameDetails.Domains.Domain2}
                </p>
              </div>
            </div>
          </div>
          <div className={styles["middlepart"]}>
            <div className={styles["name-availability"]}>
              <h4>LLP NAME AVAILABILITY</h4>
              <div className={styles["availability-info"]}>
                <h5>{nameDetails.LLPNameAvailability}</h5>
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
                <h5>{nameDetails.Trademarkability}</h5>
                <p>(As per Ministry of Commerce LLP Database)</p>
              </div>
            </div>
            <div className={styles["name-product-preview"]}>
              <img ref={SamplesImage} src={`${SamplesImage.current}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Name;
