import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Tabs from "../components/Tabs";
// import { addUserToSpreadsheet } from "../utils/sheet-api";
import { useLocalStorageForUserDetails } from "../hooks/useLocalStorage";
import client from "../utils/sanity-client";
import Loading from "../components/Loading";
const styles = require("../styles/home.module.css").default;
const homeImg = require("../assets/images/greeting.png");

function Home() {
  const [greetingsData, setGreetingsData] = useState({} as any);
  const [loading, isLoading] = useState(true);

  const navigate = useNavigate();
  const { getItem }: any = useLocalStorageForUserDetails();
  const userData = getItem();
  const { name, email } = userData.user;

  const query = `*[_type == "Greetings" && User->Email == "${email}"]{Intro, FirstPoint, SecondPoint, Outro}`;
  const fetchGreetingsData = useCallback(async () => {
    client
      .fetch(query)
      .then((users) => {
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
      await fetch(`${process.env.REACT_APP_API_URL}/api/set-feedback-data`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            name,
            email,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
        }),
      })
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
      addUserToSpreadsheet().then(() => {
        isLoading(false);
        console.log("added user to spreadsheet");
      });
    });
  }, [addUserToSpreadsheet, fetchGreetingsData]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className={styles["home-container "]}>
        <div className={styles["home"]}>
          <div className={styles["home-sidebar"]}>
            <SideBar isLogin={false}>
              <Tabs show={1} />
            </SideBar>
          </div>
          <div className={styles["main-container"]}>
            <div className={styles["navbar"]}>
              <Navbar />
            </div>
            <div className={styles["div"]}>
              <div className={styles["div-2"]}>
                <div className={styles["div-3"]}>
                  <div className={styles["column"]}>
                    <div className={styles["div-4"]}>
                      <div
                        style={{
                          fontFamily: "prospectus-bold",
                          fontWeight: 700,
                          fontSize: "32px",
                          lineHeight: "27px",
                          width: "600px",
                          margin: "5px 0px",
                        }}
                      >
                        {`Greetings, ${name}!`}
                      </div>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        <br />
                      </span>
                      <div
                        style={{
                          fontFamily: "Mulish, sans-serif",
                          fontWeight: 600,
                          fontSize: "17px",
                          lineHeight: "26px",
                          width: "600px",
                        }}
                      >
                        {greetingsData.intro}
                      </div>
                      <div className={styles["content-middle"]}>
                        <ul>
                          <li
                            style={{
                              listStyle: "none",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "Mulish, sans-serif",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "26px",
                                width: "600px",
                              }}
                            >
                              {greetingsData.firstPoint}
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
                                fontFamily: "Mulish, sans-serif",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "26px",
                                width: "600px",
                              }}
                            >
                              {greetingsData.secondPoint}
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div
                        style={{
                          fontFamily: "Mulish, sans-serif",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "24px",
                          width: "680px",
                        }}
                      >
                        {greetingsData.outro}
                      </div>
                    </div>
                  </div>
                  <div className={styles["column-2"]}>
                    <div className={styles["column-2-img"]}>
                      <img src={homeImg} alt="" />
                    </div>
                    <div className={styles["column-2-btn"]}>
                      <Button
                        handleClick={handleLoginSubmit}
                        buttonValue={"CLICK TO BEGIN"}
                      />
                    </div>
                  </div>
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
