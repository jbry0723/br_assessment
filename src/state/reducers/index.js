import { combineReducers } from "redux";
import { restaurantReducer } from "./restaurantReducer";


export const rootReducer = combineReducers({
  restaurant: restaurantReducer,
});

//this combiner added for scalability.
