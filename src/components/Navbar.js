import "../css/navbar.css";
import React from "react";
import mapIcon from '../assets/map_icon.png'
import backIcon from '../assets/back_icon.png'


function Navbar(props) {
return <div className="topBar">
      <img className='backIcon' src={backIcon} alt="Back Icon"/>
    <h1 className='titleText'>Lunch Tyme</h1>
    <img className='mapIcon' src={mapIcon} alt="Map Icon"/>
  
</div>;
}


export default Navbar