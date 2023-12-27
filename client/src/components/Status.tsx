import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdOutlineOutlinedFlag } from "react-icons/md";

function Status() {
  return (
    <>
      <div className="status">
        <div className="home">
          <IoMdHome />
        </div>
        <div className="nomen-tab"></div>
        <div className="flag">
          <MdOutlineOutlinedFlag />
        </div>
      </div>
    </>
  );
}

export default Status;
