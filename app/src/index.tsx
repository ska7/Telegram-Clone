import "./index.css";

import * as React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux";
import AppLayout from "./layout";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <AppLayout />
  </Provider>
);
