import React from "react";
import Rows from "../components/Rows";
const styles = require("../styles/client-details.module.css").default;
function ClientDetails({ handleTabClick }: any) {
  return (
    <div className={styles["client-details"]}>
      <div className={styles["tables"]}>
        <p>Client</p>
        <p>Year</p>
        <p>Sector</p>
        <p>Name Given</p>
        <p>Pricing</p>
      </div>
      <Rows rows={["Client", "Year", "Sector", "Name Given", "Pricing "]} />
      <Rows rows={["Client", "Year", "Sector", "Name Given", "Pricing "]} />
      <Rows rows={["Client", "Year", "Sector", "Name Given", "Pricing "]} />
    </div>
  );
}

export default ClientDetails;
