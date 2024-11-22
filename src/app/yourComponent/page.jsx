
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { base_path } from "./environment.js";
import "../src/style/css/feather.css";
import "../src/style/css/line-awesome.min.css";
import "../src/style/scss/main.scss";
import "../src/style/icons/fontawesome/css/fontawesome.min.css";
import "../src/style/icons/fontawesome/css/all.min.css";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import store from "./core/redux/store.js";
import AllRoutes from "./Router/router.js";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={base_path}>
          <AllRoutes />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}

export default function YourComponent() {
  // ...existing code...
}