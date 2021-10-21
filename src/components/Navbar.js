import "../css/navbar.css";
import React from "react";
import mapIcon from "../assets/map_icon.png";
import backIcon from "../assets/back_icon.png";

function Navbar(props) {
  let {clearSelected}=props
  const hideButton = {
    opacity: "0",
    transition: "opacity .4s",
  };
  const showButton = {
    maxWidth: "100%",
    transition: "opacity .4s",
  };

  let handleClick = (e) => {
    e.preventDefault();
    clearSelected();
  };
  return (
    <nav className="topBar">
      <img
        className="backIcon"
        style={props.selected === null ? hideButton : showButton}
        src={backIcon}
        alt="Back Icon"
        onClick={handleClick}
      />
      <h1 className="titleText">Lunch Tyme</h1>
      <img className="mapIcon" src={mapIcon} alt="Map Icon" />
    </nav>
  );
}

export default Navbar;
