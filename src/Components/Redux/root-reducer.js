import { combineReducers } from "redux";
import bookItemReducer from "./Book/bookReducer";
import cartReducer from "./Cart/cartReducer";


const rootReducer = combineReducers({
  bookReducer: bookItemReducer,
  cartReducer: cartReducer
});

export default rootReducer;