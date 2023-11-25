import React from "react";
const NomencaptureLogo = require("../assets/svg/nomencapture-logo.svg").default;
const becomeLogo = require("../assets/become-logo.png");

function SideBar({ children }: any) {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={NomencaptureLogo} alt="" />
        </div>
        <div className="children">{children}</div>
        <div className="become-logo">
          <p>a promise of</p>
          <img src={becomeLogo} alt="" />
        </div>
      </div>
    </>
  );
}

export default SideBar;
