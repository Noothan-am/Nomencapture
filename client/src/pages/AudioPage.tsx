import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import Button from "../components/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import NamingSet from "./NamingSet";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
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
          <IoIosArrowRoundForward width={"2rem"} />
        </div>
      </div>
    </div>
  );
};

const AudioPage = () => {
  const navigate = useNavigate();
  const handleClicktoNextPage = () => {
    navigate("/naming-set");
  };

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
                    <h4>
                      Based on these considerations, it is recommended that the
                      brand name in this sector be either abstract for
                      uniqueness or suggestive for easy recall.
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
