import "../css/restaurantlist.css";
import React from "react";
import { connect } from "react-redux";
import sLoadIcon from "../assets/loading_s_small.gif";
import ListItem from "../components/ListItem";

function RestaurantList(props) {
let {isLoading,data}=props.state.restaurant
  if (isLoading) {
    return (
      <div className="loadingWindow">
        <img className="sLoadIcon" src={sLoadIcon} alt="Loading Icon" />
      </div>
    );
  }
  console.log(data);
  return (
    <div className="scrollWindow">
      {data.map((entry) => {
        return <ListItem key={entry.name+entry.location.address} restaurantData={entry} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(RestaurantList);
