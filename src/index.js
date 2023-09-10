import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import Router from "./components/Router";
import { store } from "./store/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);