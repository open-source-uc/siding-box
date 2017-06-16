import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import createHistory from "history/createMemoryHistory";

import SidingBox from "./app/SidingBox";
import configureStore from "./app/redux/store";

const initialState = {};
const options = {
  hydratation: {},
};
const objects = {
  history: createHistory(),
};

ReactDOM.render(
  <SidingBox
    store={configureStore(initialState, objects)}
    persistStore={persistStore}
    options={options}
    history={objects.history}
  />,
  document.getElementById("root")
);
