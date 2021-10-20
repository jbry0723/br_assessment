import {
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL,
} from "../actions/restaurantActions";

export const initialState = { isLoading: true, error: null, data: null };

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        data: action.payload,
      };
    case GET_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: false,
      };
    default:
      return state;
  }
};

export default restaurantReducer;
