import React, { useCallback, useEffect, useRef } from "react";
import client from "../utils/sanity-client";
import FlagStepper from "../components/FlagStepper";
import { useLocalStorageForUserDetails } from "../hooks/useLocalStorage";

const styles = require("../styles/name-list.module.css").default;

function NameList() {
  const nameListImg = useRef<any>(null);
  const { getItem }: any = useLocalStorageForUserDetails();
  const userData = getItem();
  const { email } = userData.user;

  const query = `*[_type == "NamingSet" && User->Email == "${email}"]{"PlayersNames": PlayersNames.asset->url}`;
  const getAudioPageData = useCallback(() => {
    client
      .fetch(query)
      .then((users) => {
        nameListImg.current.src = users[0].PlayersNames;
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  useEffect(() => {
    getAudioPageData();
  }, [getAudioPageData]);

  return (
    <>
      <div className={styles["name-list-2-container"]}>
        <div className={styles["heading"]}>
          <p>
            Can you find your potential{" "}
            <span>name among the adjacent players?</span>
          </p>
        </div>
        <div className={styles["nameset-2-names-img"]}>
          <img ref={nameListImg} alt="img for names" />
        </div>
      </div>
    </>
  );
}

export default NameList;
