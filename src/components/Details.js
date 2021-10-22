import "../css/details.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import GoogleMapReact from "google-map-react";

function Details(props) {
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    category: "",
    contact: {},
    location: { lat: 39.8097343, lng: -98.5556199 },
  });
  let { name, category, contact, location } = restaurantData;
  let { selected, mapToggle } = props;

  console.log(props);
  const closedDrawer = {
    maxWidth: "0",
    opacity: "0",
    transition: "max-width .3s,opacity .2s",
  };
  const openDrawer = {
    maxWidth: "100%",
    transition: "max-width .3s, opacity .2s",
  };

  let mapKey = Math.random() * Math.random();

  useEffect(() => {
    if (selected !== null) {
      setRestaurantData(props.state.restaurant.data[props.selected]);
      mapKey = Math.random() * Math.random();
    }
  }, [selected, props.selected]);

  const restaurantLocation = {
    lat: restaurantData?.location.lat,
    lng: restaurantData?.location.lng,
  };

  const renderMarkers = (map, maps) => {
    if (selected !== null) {
      let marker = new maps.Marker({
        position: {
          lat: restaurantData?.location.lat,
          lng: restaurantData?.location.lng,
        },
        map,
      });
      return marker;
    }
  };

  return (
    <main
      className="detailsDiv"
      style={mapToggle === true ? openDrawer : closedDrawer}
    >
      <figure className="mapDiv">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          key={mapKey}
          center={restaurantLocation}
          zoom={selected !== null ? 14 : 1}
          resetBoundsOnResize={true}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        ></GoogleMapReact>
      </figure>
      <header className="nameBanner">
        <h2 className="restaurantName">
          {name ? name : "Please select a restaurant"}
        </h2>
        <p className="restaurantCategory">{category}</p>
      </header>
      <address className="contactDiv">
        <p className="addressP">
          {location?.address && location.address}
          {<br />}
          {location?.formattedAddress && location.formattedAddress[1]}
        </p>
        <p className="phoneP">
          {contact?.formattedPhone && contact.formattedPhone}
        </p>
        <p className="twitterP">
          {contact?.twitter ? `@${contact.twitter}` : ""}
        </p>
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
