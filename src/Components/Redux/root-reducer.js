import { combineReducers } from "redux";
import bookItemReducer from "./Book/bookReducer";


const rootReducer = combineReducers({
  bookReducer: bookItemReducer
});

export default rootReducer;