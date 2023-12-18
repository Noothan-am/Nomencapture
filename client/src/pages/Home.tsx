import React from "react";
import Button from "../components/Button";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const styles = require("../styles/home.module.css").default;
const homeImg = require("../assets/istockphoto-628162588-612x612_1-removebg-preview.png");

function Home() {
  const navigate = useNavigate();
  const handleLoginSubmit = () => {
    navigate("/form");
  };
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className={styles["home"]}>
        <div className="home-sidebar">
          <SideBar isLogin={false}>
            <Tabs />
          </SideBar>
        </div>
        <div className={styles["div"]}>
          <div className={styles["div-2"]}>
            <div className={styles["div-3"]}>
              <div className={styles["column"]}>
                <div className={styles["div-4"]}>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    Greetings, Samshritha!
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    <br />
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Get ready for an exciting journey with our in-depth
                    questionnaire! While we anticipate it may take between 15 to
                    30 minutes of your valuable time, the significance is
                    profound:
                  </span>
                  <ul>
                    <li
                      style={{
                        listStyle: "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          lineHeight: "normal",
                        }}
                      >
                        1. Engage in a thoughtful reflection on your
                        expectations, actively contributing to the formation of
                        your business vision. This exercise is not just about
                        answering questions; it's a personal journey that
                        enhances your clarity and confidence.
                      </span>
                    </li>
                  </ul>
                  <ul>
                    <li
                      style={{
                        listStyle: "none",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "15px",
                          fontWeight: 600,
                          lineHeight: "normal",
                        }}
                      >
                        2. Your responses serve as the building blocks of our
                        naming process, delving into the emotions, aspirations,
                        and sheer power emanating from your business. Our goal
                        is to craft a name that not only fits but resonates
                        profoundly—a moniker you'll take pride in, uttering with
                        conviction.
                      </span>
                    </li>
                  </ul>
                  <span
                    style={{
                      fontSize: "15px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      lineHeight: "normal",
                    }}
                  >
                    Your insights are pivotal in unraveling the true essence of
                    your business. Join us on this meaningful journey as we
                    collaboratively shape the perfect identity for your venture!
                  </span>
                </div>
              </div>
              <div className={styles["column-2"]}>
                <div className={styles["column-2-btn"]}>
                  <Button
                    handleClick={handleLoginSubmit}
                    buttonValue={"CLICK TO BEGIN"}
                  />
                </div>
                <div className={styles["column-2-img"]}>
                  <img src={homeImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
