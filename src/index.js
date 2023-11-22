import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import "./store.js";
import store from "./store";
import { Provider } from "react-redux";
// import { createCustomer } from "./features/customer/customerSlice";

// store.dispatch(createCustomer("khan"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
