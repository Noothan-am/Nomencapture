import React from "react";
import Rows from "../components/Rows";
import moment from "moment";
const styles = require("../styles/client-details.module.css").default;
function ClientDetails({ allUsersData }: any) {
  console.log(allUsersData);

  return (
    <div className={styles["client-details"]}>
      <div className={styles["tables"]}>
        <p>Client</p>
        <p>Year</p>
        <p>Sector</p>
        <p>Name Given</p>
        <p>Pricing</p>
      </div>
      {Object.keys(allUsersData).map((name: any) => {
        return (
          <Rows
            rows={[
              allUsersData[name]["Your Name"],
              moment(
                `${allUsersData[name]["Timestamp"]}`,
                "DD/MM/YYYY HH:mm:ss"
              ).year(),
              allUsersData[name][
                "Which sector does your product / service belong to?"
              ],
              "INAI",
              "0",
            ]}
            navigate={name}
          />
        );
      })}
    </div>
  );
}

export default ClientDetails;
