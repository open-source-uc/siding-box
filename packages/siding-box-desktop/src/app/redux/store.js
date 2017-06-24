import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";
import { autoRehydrate } from "redux-persist";
import { routerMiddleware } from "react-router-redux";

import reducers from "./reducers";

export default function configureStore(initialState, { history }) {
  const shouldLog = process.env.NODE_ENV !== "production";

  // Setup middleware
  const middleware = [
    shouldLog ? logger : null,
    thunk.withExtraArgument({}),
    promiseMiddleware(),
    routerMiddleware(history),
  ].filter(Boolean);

  // Setup middlewares and enhancers
  const enhancer = compose(
    applyMiddleware(...middleware),
    autoRehydrate({ log: shouldLog })
  );

  // Create redux store
  const store = createStore(reducers, initialState, enhancer);

  return store;
}
