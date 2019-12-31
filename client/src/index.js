import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductProvider } from "./context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>,
  document.getElementById("root")
);
