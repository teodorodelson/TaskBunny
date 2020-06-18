import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import promise from "redux-promise";
// import createLogger from "redux-logger";
// import allReducers from "./redux/reducers/";
import "react-toastify/dist/ReactToastify.css";
import * as serviceWorker from "./serviceWorker";

// const logger = createLogger();
// const store = createStore(allReducers, applyMiddleware(thunk, promise, logger));

ReactDOM.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
