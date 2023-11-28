import React from "react";
const style = require("../styles/button.module.css").default;

function Button({ handleClick, buttonValue }: any) {
  return (
    <>
      <button className={style["button"]} onClick={handleClick} type="submit">
        <span className="">{buttonValue}</span>
      </button>
    </>
  );
}

export default Button;
