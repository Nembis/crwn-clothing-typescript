import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const midlewares = [logger];

const composeEnhancers = compose(applyMiddleware(...midlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

//@ts-ignore
export const persistor = persistStore(store);
