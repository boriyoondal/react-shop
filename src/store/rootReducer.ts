// store/rootReducer.ts
import { combineReducers } from "redux";
import login from "./login/reducer";
import cartSlice from "./cart/cartSlice";

const rootReducer = combineReducers({ login, cartSlice });

export default rootReducer;
