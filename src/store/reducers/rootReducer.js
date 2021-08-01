import {combineReducers} from "redux";
import advReducer from "./advReducer";
import loginReducer from "./loginReducer";
import newsReducer from "./newsReducer";
import partnersReducer from "./partnersReducer";
import sheduleReducer from "./sheduleReducer";

export default combineReducers({
  login: loginReducer,
  news: newsReducer,
  adv: advReducer,
  partners: partnersReducer,
  shedule: sheduleReducer
});
