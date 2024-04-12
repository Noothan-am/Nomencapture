import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const loadingImg = require("../assets/images/Loading.png");

const styles = require("../styles/final-greeting.module.css").default;

function Thankyou() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/understanding");
    }, 5000);
  }, [navigate]);

  return (
    <>
      <div className={styles["SecondRoundGreetings"]}>
        <img src={loadingImg} alt="" />
        <h2>Thank you for your response. We will contact you shortly.</h2>
      </div>
    </>
  );
}

export default Thankyou;
