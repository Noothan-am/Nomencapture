import React, { useEffect, useCallback, useState, useRef } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import client from "../utils/sanity-client";
import { FaRegCirclePause } from "react-icons/fa6";

const styles = require("../styles/audio-page.module.css").default;

const Paragraph = ({ data }: any) => {
  return (
    <div className={styles["audio-page-paragraph"]}>
      <p>{data}</p>
    </div>
  );
};

const AudioComponent = ({ audiofile }: any) => {
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
          />
        </div>
      </div>
    </div>
  );
};

const AudioPage = () => {
  const [audioPageDetails, setAudioPageDetails] = useState<any>([]);

  const navigate = useNavigate();
  const handleClicktoNextPage = () => {
    navigate("/naming-set");
  };

  const getAudioPageData = useCallback(() => {
    client
      .fetch(
        `
      *[_type == "NamingSet"] {
          name,
          title,
          type,
          MainDescription,
          Description1,
          Description2,
          Description3,
          Description4,
          "audioFiles": [
            Audio1.asset->url,
            Audio2.asset->url,
            Audio3.asset->url
          ]
      }
    `
      )
      .then((users) => {
        setAudioPageDetails(users[0]);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  useEffect(() => {
    getAudioPageData();
  }, [getAudioPageData]);

  return (
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
            <div className={styles["form-content"]}>
              <div className={styles["audio-page-container"]}>
                <div className={styles["audio-page-content-paragraph"]}>
                  <div className={styles["audio-page-content-main-heading"]}>
                    <h4>{audioPageDetails.MainDescription}</h4>
                  </div>
                  <div className={styles["audio-page-content-main-paragraph"]}>
                    <Paragraph data={audioPageDetails.Description1} />
                    <Paragraph data={audioPageDetails.Description2} />
                    <Paragraph data={audioPageDetails.Description3} />
                    <Paragraph data={audioPageDetails.Description4} />
                  </div>
                </div>
                <div className={styles["audio-page-content-audio"]}>
                  <div className={styles["audio-heading"]}>
                    <h3>HEAR IT FIRST</h3>
                  </div>
                  <div className={styles["audio-content"]}>
                    {/* <AudioComponent
                      audiofile={audioPageDetails.audioFiles}
                      handlePlayBtnClick={handlePlayBtnClick}
                    />
                    <AudioComponent
                      audiofile={audioPageDetails.audioFiles}
                      handlePlayBtnClick={handlePlayBtnClick}
                    />
                    <AudioComponent
                      audiofile={audioPageDetails.audioFiles}
                      handlePlayBtnClick={handlePlayBtnClick}
                    /> */}
                    {audioPageDetails.audioFiles &&
                      audioPageDetails.audioFiles.map(
                        (audioFile: any, index: any) => {
                          return (
                            <AudioComponent key={index} audiofile={audioFile} />
                          );
                        }
                      )}
                  </div>
                  <div className={styles["audio-page-button"]}>
                    <Button
                      handleClick={handleClicktoNextPage}
                      buttonValue={"PROCEED"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPage;
