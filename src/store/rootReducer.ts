// store/rootReducer.ts
import { combineReducers } from "redux";
import cart from "./cart/reducer";
import demo from "./demo/reducer";
import login from "./login/reducer";

const rootReducer = combineReducers({ cart, login });

export default rootReducer;
