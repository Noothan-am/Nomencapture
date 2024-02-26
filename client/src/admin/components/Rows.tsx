import React from "react";
const styles = require("../styles/row-component.module.css").default;

function Rows({rows}: any) {
  return (
    <div className={styles["row-component"]}>
      <div className={styles["values"]}>
       {rows.map((row: any) => (
           <p>{row}</p>
       ))}
      </div>
    </div>
  );
}

export default Rows;
