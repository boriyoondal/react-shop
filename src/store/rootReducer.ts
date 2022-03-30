// store/rootReducer.ts
import { combineReducers } from "redux";
// type
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({ });

export default rootReducer;