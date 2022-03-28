import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React-router-dom
import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store";

// emtion
import { ThemeProvider } from "@emotion/react";
import Theme from "./styles/Theme";
import GlobalStyle from "./styles/Global";

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
  document.getElementById('root')
);

reportWebVitals();
