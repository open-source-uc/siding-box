import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import App from "./App";

const SidingBox = () =>
  <Router>
    <App />
  </Router>;

ReactDOM.render(<SidingBox />, document.getElementById("root"));
