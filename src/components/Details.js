import "../css/details.css";
import React from "react";
import { connect } from "react-redux";

function Details(props) {
  const closedDrawer = {
    maxWidth: "0",
    opacity: "0",
    transition: "max-width .6s,opacity .4s",
  };
  const openDrawer = {
    maxWidth: "100%",
    transition: "max-width .6s, opacity .4s",
  };

  return (
    <div
      className="detailsDiv"
      style={props.selected === null ? closedDrawer : openDrawer}
    >
      <div ></div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(Details);
