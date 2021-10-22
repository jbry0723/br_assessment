import axios from "axios";

const getRestaurants = () => {
  return axios.get("https://s3.amazonaws.com/br-codingexams/restaurants.json");
};

export { getRestaurants };
