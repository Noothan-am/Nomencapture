import React from "react";

function Button({ handleClick }: any) {
  return (
    <>
      <button className="loginButton" onClick={handleClick} type="submit">
        <span className="">PROCEED</span>
      </button>
    </>
  );
}

export default Button;
