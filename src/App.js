import "./css/app.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getList } from "./state/actions/restaurantActions";
import Navbar from "./components/Navbar";
import RestaurantList from "./components/RestaurantList";
import Details from "./components/Details";

function App(props) {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [mapToggle, setMapToggle] = useState(false);
  let updateSelected = (id) => {
    setSelectedRestaurant(id);
  };

  let clearSelected = () => {
    setSelectedRestaurant(null);
  };
  

  useEffect(() => {
    props.getList();
  }, []);

  return (
    <div className="App">
      <Navbar selected={selectedRestaurant} clearSelected={clearSelected} mapToggle={mapToggle} setMapToggle={setMapToggle} />
      <div>
        <RestaurantList updateSelected={updateSelected} />
        <Details selected={selectedRestaurant} />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { getList })(App);
