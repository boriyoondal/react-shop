// store/rootReducer.ts
import { combineReducers } from "redux";
import reducer from "../store/cart/reducer"
// type
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({ reducer });

export default rootReducer;