import { combineReducers } from "redux";

import router from "./modules/router";
import periods from "./modules/periods";

const reducer = combineReducers({
  router,
  periods,
});

export default reducer;
