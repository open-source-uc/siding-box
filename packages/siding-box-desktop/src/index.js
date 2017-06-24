import React from "react";
import ReactDOM from "react-dom";
import { persistStore } from "redux-persist";
import createHistory from "history/createMemoryHistory";
import cheerio from "cheerio";
import SidingBoxCore from "siding-box-core";
import { jar } from "popsicle";

import SidingBox from "./app/SidingBox";
import configureStore from "./app/redux/store";

const core = new SidingBoxCore(
  {
    username: "pelopez2",
    password: "PASSWORD",
  },
  {
    jar: jar(),
    cheerio,
  }
);

core
  .getCourses()
  .then(courses => {
    console.log(courses);
  })
  .catch(err => console.error(err));

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
