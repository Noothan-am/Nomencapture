import React from "react";
const styles = require("../styles/thankyou.module.css").default;

function Thankyou() {
  return (
    <>
      <div className={styles["thankyou"]}>
        <h2>Thank you for filling the form, Samshritha</h2>
        <p>We will notify you when we are ready with our first set of names!</p>
      </div>
    </>
  );
}

export default Thankyou;
