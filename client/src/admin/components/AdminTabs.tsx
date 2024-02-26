import React from "react";
const styles = require("../styles/admin-tabs.module.css").default;
function AdminTabs({ show, handleTabClick }: any) {
  return (
    <div className={styles["tabs"]}>
      <div
        onClick={() => handleTabClick(1)}
        className={styles[show === 1 ? "tabs-1" : "tabs-5"]}
      >
        Names
      </div>
      <div
        onClick={() => handleTabClick(2)}
        className={styles[show === 2 ? "tabs-1" : "tabs-5"]}
      >
        Client
      </div>
    </div>
  );
}

export default AdminTabs;
