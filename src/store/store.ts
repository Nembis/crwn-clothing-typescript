import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const midlewares = [logger];

const composeEnhancers = compose(applyMiddleware(...midlewares));

export const store = createStore(rootReducer, undefined, composeEnhancers);
