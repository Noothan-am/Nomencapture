import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import Button from "../components/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
const styles = require("../styles/audio-page.module.css").default;

const Paragraph = ({ data }: any) => {
  return (
    <div className={styles["audio-page-paragraph"]}>
      <p>{data}</p>
    </div>
  );
};

const AudioComponent = ({ data }: any) => {
  return (
    <div className={styles["audio"]}>
      <div className={styles["audio-image"]}>
        <div className={styles["play-button"]}>
          <FaRegCirclePlay />
        </div>
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "black",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        ></div>
        <div className={styles["audio-spikes"]}>
          <GiSoundWaves width={"2rem"} />
        </div>
      </div>
      <div className={styles["audio-input"]}>
        <div className={styles["input"]}>
          <input
            type="text"
            className={styles["input-arrow"]}
            placeholder="Type what you heard"
          />
          <IoIosArrowRoundForward width={"2rem"} />
        </div>
      </div>
    </div>
  );
};

const AudioPage = () => {
  return (
    <div className="audio-page">
      <div className="audiopage-leftpart">
        <div className={styles["audio-page-container"]}>
          <div className={styles["audio-page-content-paragraph"]}>
            <div className={styles["audio-page-content-main-heading"]}>
              <h4>
                Based on these considerations, it is recommended that the brand
                name in this sector be either abstract for uniqueness or
                suggestive for easy recall.
              </h4>
            </div>
            <div className={styles["audio-page-content-main-paragraph"]}>
              <Paragraph
                data={
                  "Health & organic food ranges are mostly found in the premium price segment."
                }
              />
              <Paragraph
                data={
                  "The millet and instant mix market is crowded with too many small players and no big players having specific brand recall. "
                }
              />
              <Paragraph
                data={
                  "GoI is bringing special boost to the already rising Millet market."
                }
              />
              <Paragraph
                data={
                  "The top two type of names are either suggestive or coined. "
                }
              />
            </div>
          </div>
          <div className={styles["audio-page-content-audio"]}>
            <div className={styles["audio-heading"]}>
              <h3>HEAR IT FIRST</h3>
            </div>
            <div className={styles["audio-content"]}>
              <AudioComponent />
              <AudioComponent />
              <AudioComponent />
            </div>
            <div className={styles["audio-page-button"]}>
              <Button buttonValue={"PROCEED"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPage;
