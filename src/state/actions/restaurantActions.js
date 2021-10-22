import { getRestaurants } from "../../api";
export const GET_LIST_REQUEST = "GET_LIST_REQUEST";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_FAIL = "GET_LIST_FAIL";
export const UPDATE_SELECTED = "UPDATE_SELECTED";
export const CLEAR_SELECTED = "CLEAR_SELECTED";

export const getList = () => (dispatch) => {
  dispatch({ type: GET_LIST_REQUEST });
  getRestaurants()
    .then((res) => {
      dispatch({ type: GET_LIST_SUCCESS, payload: res.data.restaurants });
    })
    .catch((err) => dispatch({ type: GET_LIST_FAIL, payload: err }));
};
