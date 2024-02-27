import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
