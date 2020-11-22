
import { combineReducers } from "redux";
import PaginationDataReducer from "./PaginationDataReducer";
export default combineReducers({
  dataItem: PaginationDataReducer
});