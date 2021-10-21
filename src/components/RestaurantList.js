import "../css/restaurantlist.css";
import React from "react";
import { connect } from "react-redux";
import sLoadIcon from "../assets/loading_s_small.gif";
import ListItem from "../components/ListItem";

function RestaurantList(props) {
  let { updateSelected } = props;
  let { isLoading, data } = props.state.restaurant;
  if (isLoading) {
    return (
      <main className="loadingWindow">
        <img className="sLoadIcon" src={sLoadIcon} alt="Loading Icon" />
      </main>
    );
  }
  return (
    <main className="scrollWindow">
      {data.map((entry) => {
        return (
          <ListItem
            key={entry.name + entry.location.address}
            id={data.indexOf(entry)}
            bgImg={entry.backgroundImageURL}
            name={entry.name}
            category={entry.category}
            updateSelected={updateSelected}
          />
        );
      })}
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(RestaurantList);
