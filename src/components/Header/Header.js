import React, { useEffect } from "react";
import "./Header.css";
import Fade from "react-reveal/Fade";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
const Header = () => {
  const history = useHistory();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        boxShadow: "1px 1px 5px black",
        color: "white",
        zIndex: "100",
      }}
    >
      <div style={{ width: "100%" }}>
        <span className="header">
          <Fade top> 🎬 Movie Recommendation System</Fade>
        </span>
      </div>
    </div>
  );
};

export default Header;
