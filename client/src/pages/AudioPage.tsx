import React, { useEffect, useCallback, useState, useRef } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import client from "../utils/sanity-client";
import { FaRegCirclePause } from "react-icons/fa6";
import FlagStepper from "../components/FlagStepper";
import { ToastContainer, toast } from "react-toastify";
import { useLocalStorageForUserDetails } from "../hooks/useLocalStorage";

const audioImage = require("../assets/images/audio.png");
const styles = require("../styles/audio-page.module.css").default;

const Paragraph = ({ data }: any) => {
  return (
    <div className={styles["audio-page-paragraph"]}>
      <p>{data}</p>
    </div>
  );
};

const AudioComponent = ({
  audiofile,
  soundNo,
  voiceHeard,
  handleChange,
}: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<any>(null);

  const handlePlayBtnClick = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles["audio"]}>
      <div className={styles["audio-image"]}>
        <button onClick={handlePlayBtnClick} className={styles["play-button"]}>
          {isPlaying ? <FaRegCirclePause /> : <FaRegCirclePlay />}
        </button>
        <audio ref={audioRef}>
          <source src={`${audiofile}`} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
        <div className={styles["audio-spikes"]}>
          <img src={require("../assets/svg/Playy-voice.svg").default} alt="" />
        </div>
      </div>
      <div className={styles["audio-input"]}>
        <div className={styles["input"]}>
          <input
            type="text"
            className={styles["input-arrow"]}
            placeholder="Type what you heard"
            value={voiceHeard[soundNo] || ""}
            onChange={(e) => handleChange(e, soundNo)}
          />
        </div>
      </div>
    </div>
  );
};

const AudioPage = () => {
  const [audioPageDetails, setAudioPageDetails] = useState<any>([]);
  const [voiceHeard, setHeardVoice] = useState<any>({});
  const { getItem }: any = useLocalStorageForUserDetails();
  const userData = getItem();
  const { email } = userData.user;
  const navigate = useNavigate();
  const handleClickToNextPage = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/update-feedback-data`,
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            value: [voiceHeard[0], voiceHeard[1], voiceHeard[2]],
            columnToUpdate: "E",
          }),
        }
      );
      if (response.status === 200 || response.status === 201) {
        toast.success("Response submitted!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/naming-set");
      } else {
        toast.error("Failed to submit!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Internal Server Error!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(error);
    }
    navigate("/naming-set");
  }, [navigate, voiceHeard]);

  const getAudioPageData = useCallback(() => {
    client
      .fetch(
        `*[_type == "NamingSet" && User->Email == "${email}"] {MainDescription,Description1,Description2,Description3,Description4,"audioFiles": [Audio1.asset->url,Audio2.asset->url,Audio3.asset->url]}`
      )
      .then((users) => {
        console.log("users", users);

        setAudioPageDetails(users[0]);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  useEffect(() => {
    getAudioPageData();
  }, [getAudioPageData]);

  const handleChange = (e: any, no: any) => {
    setHeardVoice((prev: any) => ({
      ...prev,
      [no]: e.target.value,
    }));
  };

  return (
    <>
      <ToastContainer />
      <div className={styles["naming-set"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs show={3} />
            </SideBar>
          </div>
          <div className={styles["naming-set-container"]}>
            <div className={styles["div"]}>
              <div className={styles["inital"]}>
                <h3>Market Considerations</h3>
              </div>
              <div className={styles["form-content"]}>
                <div className={styles["audio-page-container"]}>
                  <div className={styles["audio-page-content-paragraph"]}>
                    <div className={styles["audio-page-content-main-heading"]}>
                      <h4>{audioPageDetails.MainDescription}</h4>
                    </div>
                    <div
                      className={styles["audio-page-content-main-paragraph"]}
                    >
                      <Paragraph data={audioPageDetails.Description1} />
                      <Paragraph data={audioPageDetails.Description2} />
                      <Paragraph data={audioPageDetails.Description3} />
                      <Paragraph data={audioPageDetails.Description4} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["audio-rating-container"]}>
              <div className={styles["audio-heading"]}>
                <img src={audioImage} alt="" />
                <h3>HEAR IT FIRST</h3>
              </div>
              <div className={styles["audio-page-content-audio"]}>
                <div className={styles["audio-content"]}>
                  {audioPageDetails.audioFiles &&
                    audioPageDetails.audioFiles.map(
                      (audioFile: any, index: any) => {
                        return (
                          <AudioComponent
                            key={index}
                            soundNo={index}
                            voiceHeard={voiceHeard}
                            handleChange={handleChange}
                            audiofile={audioFile}
                          />
                        );
                      }
                    )}
                </div>
                <div className={styles["audio-page-button"]}>
                  <Button
                    handleClick={handleClickToNextPage}
                    buttonValue={"PROCEED"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioPage;
