import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import { IoLockClosed } from "react-icons/io5";

const styles = require("../styles/nomen.module.css").default;

const NomenContentTemplate = () => {
  return (
    <>
      <div className={styles["nomen-hero-container"]}>
        <section className={styles["nomen-name-container"]}>
          <div className={styles["nomen-leftpart"]}>
            <div className={styles["name"]}>
              <h1>Unavanu</h1>
            </div>
            <ul>
              <li>உனவானு</li>
              <li>उनवणु</li>
              <li>ఉనవను</li>
            </ul>
            <p>Food / Atom / Matter / Important</p>
          </div>
          <div className={styles["nomen-rightpart"]}>
            <div className={styles["top-part"]}>
              <div className={styles["values"]}>Abstract</div>
              <div className={styles["syllables"]}>
                <p>
                  <span>4</span> Syllables
                </p>
              </div>
              <div className={styles["available-domains"]}>
                <p>
                  <span></span>.com
                </p>
                <p>
                  <span></span>.in
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
          <p>+ Unique</p>
          <p>+ Emphasizes on the importance of grains</p>
          <p>+ Scalable & future friendly</p>
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
                    Elevate your well-being with Unavanu's grain-based wonders.
                  </p>
                </div>
              </div>
              <div className={styles["container"]}>
                <img
                  src={require("../assets/images/chatbox-2.png")}
                  alt={"alt"}
                />
                <div className={styles["text-container"]}>
                  <p>Anna, Unavanu Millet Upma thanga. Unavanu iruka?</p>
                </div>
              </div>
              <div className={styles["container"]}>
                <img
                  src={require("../assets/images/chatbox-3.png")}
                  alt={"alt"}
                />
                <div className={styles["text-container"]}>
                  <p>
                    Unavanu makes delicious & healthy food super affordable.
                    Harnessing the inherent power of grains is evident in their
                    range of health-conscious offerings.
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
                  https://www.unavanu.com
                </p>
              </div>
              <div className={styles["domain-box"]}>
                <p>
                  <span>
                    <IoLockClosed />
                  </span>
                  https://www.getunavanu.com
                </p>
              </div>
            </div>
          </div>
          <div className={styles["middlepart"]}>
            <div className={styles["name-availability"]}>
              <h4>LLP NAME AVAILABILITY</h4>
              <div className={styles["availability-info"]}>
                <h5>NO MATCH FOUND</h5>
                <p>(As per Ministry of Commerce LLP Database)</p>
              </div>
            </div>
            <div className={styles["graph-image"]}>
              <img
                src={require("../assets/images/Screenshot 2023-05-16 at 2.26 17.png")}
                alt=""
              />
            </div>
          </div>
          <div className={styles["lastpart"]}>
            <div className={styles["trademarkability"]}>
              <div className={styles["trademarkability-content"]}>
                <p>TRADEMARKABILITY</p>
                <h5>CLASS 29,30,31,32</h5>
              </div>
              <div className={styles["availability-info"]}>
                <h5>NO MATCH FOUND</h5>
                <p>(As per Ministry of Commerce LLP Database)</p>
              </div>
            </div>
            <div className={styles["name-product-preview"]}>
              <img
                src={require("../assets/images/Screenshot 2023-05-16 at 2.26 17.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Nomen() {
  return (
    <>
      <div className={styles["nomen"]}>
        <div className={styles["navbar"]}>
          <Navbar />
        </div>
        <div className={styles["hero"]}>
          <div className={styles["sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs />
            </SideBar>
          </div>
          <div className={styles["nomen-container"]}>
            <div className={styles["div"]}>
              <div className={styles["form-content"]}>
                {<NomenContentTemplate />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NomenContentTemplate;
