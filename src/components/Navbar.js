import "../css/navbar.css";
import React from "react";
import mapIcon from "../assets/map_icon.png";
import backIcon from "../assets/back_icon.png";

function Navbar(props) {
  let {clearSelected, mapToggle, setMapToggle}=props
  const hideButton = {
    opacity: "0",
    transition: "opacity .4s",
  };
  const showButton = {
    maxWidth: "100%",
    transition: "opacity .4s",
  };

  let handleBackClick = (e) => {
    e.preventDefault();
    clearSelected();
    setMapToggle(false)
  };

  let handleMapClick = (e) => {
    e.preventDefault();
    setMapToggle(true)
  };


  return (
    <nav className="topBar">
      <img
        className="backIcon"
        style={(props.selected === null) ? hideButton : showButton}
        src={backIcon}
        alt="Back Icon"
        onClick={handleBackClick}
      />
      <h1 className="titleText">Lunch Tyme</h1>
      <img className="mapIcon" onClick={handleMapClick} src={mapIcon} alt="Map Icon" />
    </nav>
  );
}

export default Navbar;
