import React, { useCallback, useEffect, useRef, useState } from "react";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import { FaRegCirclePause, FaRegCirclePlay } from "react-icons/fa6";
import Button from "../components/Button";
import { FaGreaterThan } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import FlagStepper from "../components/FlagStepper";
import client from "../utils/sanity-client";
import { useLocalStorageForUserDetails } from "../hooks/useLocalStorage";
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";

const styles = require("../styles/your-name.module.css").default;

function YourName() {
  const [currentFormPage, setCurrentFormPage] = useState(4);
  const [isPlaying, setIsPlaying] = useState(false);
  const [finalNameDetails, setFinalNameDetails] = useState<any>([]);

  const audioRef = useRef<any>(null);
  const { name } = useParams();
  const { getItem }: any = useLocalStorageForUserDetails();
  const userData = getItem();
  const { email } = userData.user;
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate("/final-greeting");
  };

  const handlePlayBtnClick = async () => {
    if (audioRef.current.paused) {
      await audioRef.current.play();
    } else {
      await audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const fetchFavoriteNameDetails = useCallback(() => {
    const query = `*[_type == "NameDetails" && User->Email == "${email}" && Name == "${name}"]{
      Name,
      PhonemicSymbol,
      ShortDescription,
      "audioFiles": [
       NameAudioFile.asset->url,
      ]
    }`;
    try {
      client
        .fetch(query)
        .then(async (users) => {
          setFinalNameDetails(users[0]);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [name]);

  useEffect(() => {
    fetchFavoriteNameDetails();
  }, [fetchFavoriteNameDetails]);

  return (
    <>
      <div className={styles["naming-set"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs show={currentFormPage >= 3 ? currentFormPage + 1 : 3} />
            </SideBar>
          </div>
          <div className={styles["div"]}>
            <div className={styles["form-content"]}>
              <div className={styles["content"]}>
                <div className={styles["top-part"]}>
                  <h3>Congratulations, {userData.user.name}!</h3>
                  <p>
                    Celebrating the first sound produced when your dream became
                    a reality!
                  </p>
                </div>
                <h1>{name}</h1>
                <div className={styles["alt"]}>
                  <p>
                    {finalNameDetails && finalNameDetails.PhonemicSymbol}
                    <span onClick={handlePlayBtnClick}>
                      {isPlaying ? (
                        <FaRegCirclePause
                          style={{ marginBottom: "-.3rem" }}
                          className={styles["audio-btn"]}
                        />
                      ) : (
                        <FaRegCirclePlay
                          style={{ marginBottom: "-.3rem" }}
                          className={styles["audio-btn"]}
                        />
                      )}
                    </span>
                    <audio aria-disabled={true} ref={audioRef}>
                      <source
                        src={`${
                          finalNameDetails.audioFiles &&
                          finalNameDetails.audioFiles[0]
                        }`}
                        type="audio/mp3"
                      />
                      Your browser does not support the audio files.
                    </audio>
                  </p>
                </div>
                <div className={styles["middle-part"]}>
                  <p>{finalNameDetails && finalNameDetails.ShortDescription}</p>
                  <img src={require("../assets/images/women.png")} alt="" />
                </div>
                <div className={styles["bottom"]}>
                  <button className={styles["download"]}>
                    Download your Nomencard{" "}
                    <span>
                      <img src={require("../assets/images/doc.png")} alt="" />
                    </span>
                  </button>
                  <button className={styles["arrow"]}>
                    Share your experience{" "}
                    <span>
                      <MdArrowForwardIos />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles["nameset-2-arrows"]}>
              <Button
                handleClick={handleNextButtonClick}
                buttonValue={<FaGreaterThan />}
              />
            </div>
          </div>
          <div className={styles["audit-rating-container"]}>
            <div className={styles["audit-rating"]}>
              <p>Looking</p>
              <div className={styles["beyond-img"]}>
                <img src={require("../assets/images/Beyond-Name.png")} alt="" />
              </div>
              <div className={styles["list"]}>
                <button className={styles["list-no-border"]}>
                  Terms & Conditions{" "}
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
                <button className={styles["list-border"]}>
                  Request Domain Names{" "}
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
                <button className={styles["list-border"]}>
                  Request for Trademark{" "}
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
                <button className={styles["list-border"]}>
                  Need Verbal Strategy{" "}
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
                <button className={styles["list-border"]}>
                  Need a Brand Identity{" "}
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
                <button className={styles["list-border"]}>
                  Need a Pitch deck{" "}
                  <span>
                    <GoArrowUpRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default YourName;
