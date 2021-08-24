import React from "react";

import "./Logo.css";
import logo from "./FD_logo.png";

import Tilt from "react-tilt";

const Logo = () => {
  return (
    <div className="ma4 mt0 tc ">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img src={logo} alt="logo" className="pt1" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
