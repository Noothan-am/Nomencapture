import { useCallback, useEffect, useRef, useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import client from "../utils/sanity-client";

const styles = require("../styles/nomen.module.css").default;

const NomenContentTemplate = ({
  currentData,
  SamplesImage,
  GraphImage,
}: any) => {
  // const SamplesImage = useRef<any>(null);
  // const GraphImage = useRef<any>(null);
  // const [name, setNameDetais] = useState<any>({});
  // const [allNamesDetais, setAllNamesDetais] = useState<any>({});

  useEffect(() => {
    console.log(currentData);
  }, [currentData]);

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

  // const getAudioPageData = useCallback(
  //   (currentData: any) => {
  //     client
  //       .fetch(query)
  //       .then((users) => {
  //         GraphImage.current = users[currentData].GraphImage;
  //         SamplesImage.current = users[currentData].SamplesImage;
  //         setNameDetais(users[currentData]);
  //         setAllNamesDetais(users);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching users:", error);
  //       });
  //   },
  //   [query]
  // );

  // useEffect(() => {
  //   getAudioPageData(currentData);
  // }, [getAudioPageData, currentData]);

  return (
    <>
      <div className={styles["nomen-hero-container"]}>
        <section className={styles["nomen-name-container"]}>
          <div className={styles["nomen-leftpart"]}>
            <div className={styles["name"]}>
              <h1>{currentData.Name}</h1>
              <span>listen to songs</span>
            </div>
            <div className={styles["mul"]}>
              <ul>
                {currentData.MultilingualNames &&
                  Object.keys(currentData.MultilingualNames).map((key: any) => {
                    return (
                      <>
                        <li>{currentData.MultilingualNames[key]}</li>
                      </>
                    );
                  })}
              </ul>
            </div>
            <div className={styles["rel"]}>
              <p>{currentData.Related}</p>
            </div>
          </div>
          <div className={styles["nomen-rightpart"]}>
            <div className={styles["top-part"]}>
              <div className={styles["values"]}>{currentData.Dropdown}</div>
              <div className={styles["syllables"]}>
                <p>
                  <span>{currentData.Syllable}</span> Syllables
                </p>
              </div>
              <div className={styles["available-domains"]}>
                <p>
                  {currentData.DomainExtensions &&
                  currentData.DomainExtensions.includes(".com") ? (
                    <IoMdRadioButtonOn />
                  ) : (
                    <IoMdRadioButtonOff />
                  )}
                  <span>.com</span>
                </p>
                <p>
                  {currentData.DomainExtensions &&
                  currentData.DomainExtensions.includes(".in") ? (
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
          {currentData.NameBenefits &&
            Object.keys(currentData.NameBenefits).map((key: any) => {
              return (
                <>
                  <p>+ {currentData.NameBenefits[key]}</p>
                </>
              );
            })}
        </section>
        <div className={styles["names-more-details"]}>
          <div className={styles["firstpart"]}>
            <div className={styles["chatbox"]}>
              <div className={styles["container"]}>
                <img
                  src={require("../assets/svg/chatbox-1.svg").default}
                  alt={"alt"}
                />
                <div className={styles["text-container"]}>
                  <p>
                    {currentData.ChatDescription &&
                      currentData.ChatDescription.Chatbox1}
                  </p>
                </div>
              </div>
              <div className={styles["container"]}>
                <img
                  src={require("../assets/svg/chatbox-2.svg").default}
                  alt={"alt"}
                />
                <div className={styles["text-container"]}>
                  <p>
                    {currentData.ChatDescription &&
                      currentData.ChatDescription.Chatbox2}
                  </p>
                </div>
              </div>
              <div className={styles["container"]}>
                <img
                  src={require("../assets/svg/chatbox-3.svg").default}
                  alt={"alt"}
                />
                <div className={styles["text-container"]}>
                  <p>
                    {currentData.ChatDescription &&
                      currentData.ChatDescription.Chatbox3}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["middlepart"]}>
            <div className={styles["name-availability"]}>
              {/* <h4>LLP NAME AVAILABILITY</h4>
              <div className={styles["availability-info"]}>
                <h5>{currentData.LLPNameAvailability}</h5>
                <p>(As per Ministry of Commerce LLP Database)</p>
              </div> */}
              <div className={styles["domains-preview"]}>
                <h4>DOMAINS</h4>
                <div className={styles["domain-box"]}>
                  <p>
                    <span>
                      <IoLockClosed />
                    </span>
                    {currentData.Domains && currentData.Domains.Domain1}
                  </p>
                </div>
                <div className={styles["domain-box"]}>
                  <p>
                    <span>
                      <IoLockClosed />
                    </span>
                    {currentData.Domains && currentData.Domains.Domain2}
                  </p>
                </div>
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
                <h5>{currentData.LLPNameAvailability}</h5>
                <p>(As per Ministry of Commerce LLP Database)</p>
              </div>
              <div className={styles["availability-info"]}>
                <h5>{currentData.Trademarkability}</h5>
                <p>(As per Ministry of Commerce LLP Database)</p>
              </div>
            </div>
            <div className={styles["name-product-preview"]}>
              <img ref={SamplesImage} src={`${SamplesImage.current}`} alt="" />
            </div>
          </div>
        </div>
        <div className={styles["name-description"]}>
          <h2>Areas of Possible Concern:</h2>
          <span>
            Unavanu makes delicious & healthy food super affordable. Harnessing
            the inherent power of grains is evident in their range of
            health-conscious offerings.
          </span>
        </div>
      </div>
    </>
  );
};

export default NomenContentTemplate;
