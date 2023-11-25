import React from "react";
const style = require("../styles/button.module.css").default;

function Button({ handleClick }: any) {
  return (
    <>
      <button className={style["button"]} onClick={handleClick} type="submit">
        <span className="">PROCEED</span>
      </button>
    </>
  );
}

export default Button;
