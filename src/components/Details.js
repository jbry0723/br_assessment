import "../css/details.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

function Details(props) {
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    category: "",
    contact: {},
    location: {},
  });

  let { selected } = props;
  const closedDrawer = {
    maxWidth: "0",
    opacity: "0",
    transition: "max-width .3s,opacity .2s",
  };
  const openDrawer = {
    maxWidth: "100%",
    transition: "max-width .3s, opacity .2s",
  };

  useEffect(() => {
    if (selected !== null) {
      setRestaurantData(props.state.restaurant.data[props.selected]);
    }
  }, [selected, props.selected]);

  console.log(restaurantData);
  let { name, category, contact, location } = restaurantData;

  return (
    <main
      className="detailsDiv"
      style={selected === null ? closedDrawer : openDrawer}
    >
      <figure className="mapDiv"></figure>
      <header className="nameBanner">
        <h2 className='restaurantName'>{name}</h2>
        <p className='restaurantCategory'>{category}</p>
      </header>
      <address className="contactDiv">
        <p className="addressP">
          {location?.address && location.address}{<br/>}
          {location?.formattedAddress && location.formattedAddress[1]}
          
        </p>
        <p className="phoneP">
          {contact?.formattedPhone && contact.formattedPhone }
        </p>
        <p className="twitterP">{contact?.twitter ? `@${contact.twitter}`:""}</p>
      </address>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Details);
