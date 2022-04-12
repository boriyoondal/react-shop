// store/rootReducer.ts
import { combineReducers } from "redux";
import cart from "./cart/reducer";
import demo from "./demo/reducer";

const rootReducer = combineReducers({ cart });

export default rootReducer;
