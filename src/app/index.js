import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";

import SidingBox from "./SidingBox";
import configureStore from "./redux/store";

const initialState = {};
const options = {
  hydratation: {},
};

ReactDOM.render(
  <SidingBox
    store={configureStore(initialState)}
    persistStore={persistStore}
    options={options}
  />,
  document.getElementById("root")
);
