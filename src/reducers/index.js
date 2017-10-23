import {combineReducers} from "redux";
import NavReducer from './NavReducer';
import HomeReducer from "./HomeReducer";
import MessageReducer from "./MessageReducer";

export default function getRootReducer() {
  return combineReducers({
    home: HomeReducer,
    message:MessageReducer,
    nav: NavReducer,
  });
}