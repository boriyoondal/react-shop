// // store/index.ts
// import { createStore, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

// import rootReducer from "./rootReducer";

// export type RootState = ReturnType<typeof rootReducer>;

// const configureStore = () => {
//   const enhancer =
//     process.env.NODE_ENV === "production" ? compose() : composeWithDevTools();
//   const store = createStore(rootReducer, enhancer);
//   return store;
// };

// const store = configureStore();

// export default store;

// Redux
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// Redux-saga
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from "./rootsaga";

// type
export type RootState = ReturnType<typeof rootReducer>;

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, enhancer);

  sagaMiddleware.run(rootSaga);
  return store;
};

const store = configureStore();

export default store;
