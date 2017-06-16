import { combineReducers } from "redux";

import router from "./modules/router";
import periods from "./modules/periods";
import settings from "./modules/settings";

const reducer = combineReducers({
  router,
  periods,
  settings,
});

export default reducer;
