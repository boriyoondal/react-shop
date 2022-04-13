import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";

// React-router-dom
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./store/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import rootsaga from "./store/login/rootsaga";

// emtion
import { ThemeProvider } from "@emotion/react";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/Global";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootsaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
