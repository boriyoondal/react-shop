// // Redux
// import { configureStore } from "@reduxjs/toolkit";

// // Redux-saga
// import createSagaMiddleware from "redux-saga";
// import rootReducer from "./rootReducer";
// import rootSaga from "./rootsaga";

// // type
// export type RootState = ReturnType<typeof store.getState>;
//

// const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware();
//   const middlewares = [sagaMiddleware];
//   reducer: {},

//   sagaMiddleware.run(rootSaga);
//   return store;
// };

// const store = configureStore();

// export default store;

// redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cartSlice from "./cart/cartSlice";
import loginSlice from "./login/loginSlice";
import rootSaga from "./rootsaga";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const reducer = combineReducers({
  cart: cartSlice,
  login: loginSlice,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga); // Listener

export default store;
