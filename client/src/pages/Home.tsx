import React, { useCallback, useEffect, useState } from "react";
import Button from "../components/Button";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
// import { addUserToSpreadsheet } from "../utils/sheet-api";
import { useLocalStorageForUserDetails } from "../hooks/useLocalStorage";
import client from "../utils/sanity-client";
const styles = require("../styles/home.module.css").default;
const homeImg = require("../assets/istockphoto-628162588-612x612_1-removebg-preview.png");

function Home() {
  const [greetingsData, setGreetingsData] = useState({} as any);
  const navigate = useNavigate();
  const { getItem }: any = useLocalStorageForUserDetails();
  const { name, email } = getItem();

  const query =
    '*[_type == "Greetings" && User->Name == "Noothan"]{Intro, FirstPoint, SecondPoint, Outro}';
  const fetchGreetingsData = useCallback(async () => {
    client
      .fetch(query)
      .then((users) => {
        console.log({ users });
        setGreetingsData({
          intro: users[0].Intro,
          firstPoint: users[0].FirstPoint,
          secondPoint: users[0].SecondPoint,
          outro: users[0].Outro,
        });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleLoginSubmit = () => {
    navigate("/form");
  };

  const addUserToSpreadsheet = useCallback(async () => {
    try {
      await fetch(
        "https://sheetdb.io/api/v1/9njehnbkbt0z9?sheet=feedback-sheet",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                Name: name,
                Email: email,
                "How aligned are you on our Observation": null,
                Comments: null,
                "Hear it First - Voice One": null,
                "Hear it First - Voice Two": null,
                "Hear it First - Voice Three": null,
                Elaborate: null,
                "Name set One Rating": null,
                "Name set Two Rating": null,
                "Name set Three Rating": null,
                "Name Set One - Suggestion/Feedback": null,
                "Name Set Two - Suggestion/Feedback": null,
                "Name Set Three - Suggestion/Feedback": null,
                "Which naming set you like the most": null,
                "Do you prefer another round?": null,
                "Are you completely satisfied with the name?": null,
              },
            ],
          }),
        }
      )
        .then(async (response) => {
          if (response.status === 200) {
            const data = await response.json();
            return Boolean(data.length);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [email, name]);

  useEffect(() => {
    fetchGreetingsData().then(() => {
      console.log("fetched data");
      addUserToSpreadsheet().then(() => {
        console.log("added user to spreadsheet");
      });
    });
  }, [addUserToSpreadsheet, fetchGreetingsData]);

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className={styles["home"]}>
        <div className="home-sidebar">
          <SideBar isLogin={false}>
            <Tabs show={1} />
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
                    {`Greetings, ${name}!`}
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
                      fontSize: "13px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    {greetingsData.intro}
                  </span>
                  <ul>
                    <li
                      style={{
                        listStyle: "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "13px",
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          lineHeight: "normal",
                        }}
                      >
                        1. {greetingsData.firstPoint}
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
                          fontSize: "13px",
                          fontWeight: 600,
                          lineHeight: "normal",
                        }}
                      >
                        2. {greetingsData.secondPoint}
                      </span>
                    </li>
                  </ul>
                  <span
                    style={{
                      fontSize: "13px",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      lineHeight: "normal",
                    }}
                  >
                    {greetingsData.outro}
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
