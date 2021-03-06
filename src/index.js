import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { Provider } from "react-redux";
import App from "./App";
// eslint-disable-next-line import/extensions
import store from "./redux/configureStore";

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
