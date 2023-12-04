import React from "react";
const styles = require("../styles/sidebar.module.css").default;
const NomencaptureLogo = require("../assets/svg/nomencapture-logo.svg").default;
const becomeLogo = require("../assets/become-logo.png");

function SideBar({ children, isLogin }: any) {
  return (
    <>
      <div className={isLogin ? styles["sidebar-login"] : styles["sidebar"]}>
        <div className={styles["logo"]}>
          <img src={NomencaptureLogo} alt="" />
        </div>
        <div className={styles["children-container"]}>{children}</div>
        <div className={styles["become-logo-container"]}>
          <p className={styles["promise-text"]}>a promise of</p>
          <img
            src={becomeLogo}
            alt=""
            className={styles["become-logo-image"]}
          />
        </div>
      </div>
    </>
  );
}

export default SideBar;
