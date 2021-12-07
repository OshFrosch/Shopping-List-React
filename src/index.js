import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Cart from "./components/cart";

ReactDOM.render(
  <div
    style={{
      position: "absolute",
      left: "50%",
      top: "10%",
      transform: "translate(-50%)",
    }}
  >
    <Cart />
  </div>,
  document.getElementById("root")
);
