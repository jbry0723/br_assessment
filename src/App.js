import "./css/App.css";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getList } from "./state/actions/restaurantActions";

function App(props) {
  const { testState, setTestState } = useState([]);
  useEffect(() => {
    props.getList();
    console.log(props)
  }, []);

  return <div className="App">TEST</div>;
}

const mapStateToProps = (state) => {
  return {
  state,
  };

  
};

export default connect(mapStateToProps, { getList})(App);
