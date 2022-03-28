// store/index.ts
import { createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const enhancer =
    process.env.NODE_ENV === "production" ? compose() : composeWithDevTools();
  const store = createStore(rootReducer, enhancer);
  return store;
};

const store = configureStore();

export default store;