import React, { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import { IoLockClosed } from "react-icons/io5";
import { IoMdRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import client from "../utils/sanity-client";

const styles = require("../styles/nomen.module.css").default;

const NomenContentTemplate = () => {
  const SamplesImage = useRef<any>(null);
  const GraphImage = useRef<any>(null);
  const [nameDetais, setNameDetais] = useState<any>({});

  const query = `*[_type == "NameDetails"]{
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

  const getAudioPageData = useCallback(() => {
    client
      .fetch(query)
      .then((users) => {
        console.log("users", users[1]);
        GraphImage.current = users[1].GraphImage;
        SamplesImage.current = users[1].SamplesImage;
        setNameDetais(users[1]);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [query]);

  useEffect(() => {
    getAudioPageData();
  }, [getAudioPageData]);

  return (
    <>
      <div className={styles["nomen-hero-container"]}>
        <section className={styles["nomen-name-container"]}>
          <div className={styles["nomen-leftpart"]}>
            <div className={styles["name"]}>
              <h1>{nameDetais.Name}</h1>
            </div>
            <ul>
              {nameDetais.MultilingualNames &&
                Object.keys(nameDetais.MultilingualNames).map((key: any) => {
                  return (
                    <>
                      <li>{nameDetais.MultilingualNames[key]}</li>
                    </>
                  );
                })}
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
                The rhythmic repitition of ‘u’ ‘a’ and ‘n’ sounds offer a sense
                of fluidity, softness, pleasantness and positivity
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
              <img ref={SamplesImage} src={`${SamplesImage.current}`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NomenContentTemplate;
