import React from "react";
const loadingGif = require("../assets/gif/loading.gif");
const styles = require("../styles/loading.module.css").default;

function Loading() {
  return (
    <>
      <div className={styles["loading"]}>
        <div className={styles["loading-image"]}>
          <img src={loadingGif} alt="" />
        </div>
      </div>
    </>
  );
}

export default Loading;
