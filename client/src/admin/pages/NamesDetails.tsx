import React from "react";
import Rows from "../components/Rows";
const styles = require("../styles/names-details.module.css").default;

function NamesDetails({ handleTabClick }: any) {
  return (
    <div className={styles["names-details"]}>
      <div className={styles["tables"]}>
        <p>Names</p>
        <p>Name Type</p>
        <p>Syllables</p>
        <p>Class Availability</p>
        <p>Sector</p>
        <p>Captured</p>
      </div>
      <Rows
        rows={[
          "Names",
          "Name Type",
          "Syllables",
          "Class Availability",
          "Sector",
          "Captured",
        ]}
      />
      <Rows
        rows={[
          "Names",
          "Name Type",
          "Syllables",
          "Class Availability",
          "Sector",
          "Captured",
        ]}
      />
      <Rows
        rows={[
          "Names",
          "Name Type",
          "Syllables",
          "Class Availability",
          "Sector",
          "Captured",
        ]}
      />
    </div>
  );
}

export default NamesDetails;
