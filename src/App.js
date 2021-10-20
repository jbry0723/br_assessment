import "./css/app.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getList } from "./state/actions/restaurantActions";
import Navbar from "./components/Navbar"
import RestaurantList from "./components/RestaurantList";

function App(props) {
  const { selectedIndex, setSelectedIndex } = useState(null);


  useEffect(() => {
    props.getList();
  }, []);

  return <div className="App">
    <Navbar />
    <RestaurantList />
  </div>;
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { getList })(App);
