import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import monitorReducersEnhancer from "./enhancers/monitorReducer";
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
  const dev = process.env.NODE_ENV !== "production" && module.hot;
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  if (dev) {
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  }
  const composedEnhancers = compose(...enhancers);

  const store = createStore(
    combineReducers(rootReducer),
    preloadedState,
    composedEnhancers
  );

  if (dev) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
