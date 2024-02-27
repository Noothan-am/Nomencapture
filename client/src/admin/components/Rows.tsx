import React from "react";
import { Link } from "react-router-dom";
const styles = require("../styles/row-component.module.css").default;

function Rows({ rows, navigate }: any) {
  return (
    <div className={styles["row-component"]}>
      <div className={styles["values"]}>
        <Link to={`/admin/name/${navigate}`}>
          <p className={styles["heading"]}>{rows[0]}</p>
        </Link>
        <p>{rows[1]}</p>
        <p>{rows[2]}</p>
        <p>{rows[3]}</p>
        <p>{rows[4]}</p>
        <p>{rows[5]}</p>
      </div>
    </div>
  );
}

export default Rows;
