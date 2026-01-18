import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import type { ThunkAction, ThunkDispatch } from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Products from "./Products/Products.reducer";
import Authentication from "./Authentication/Authentication.reducer";
import type { UnknownAction } from "redux";

const reducers = combineReducers({
  products: Products,
  authentication: Authentication,
});

const persistedReducer = persistReducer(
  {
    key: "sagristock",
    storage,
    blacklist: ["products"],
  },
  reducers,
);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

const persistor = persistStore(store);

/* ✅ mantém seu Action<T> */
export interface Action<T = any> extends UnknownAction {
  payload?: T;
}

export type RootState = ReturnType<typeof reducers>;

export type Thunk<T = any> = ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  Action<T>
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, Action<any>>;

export { store, persistor };
