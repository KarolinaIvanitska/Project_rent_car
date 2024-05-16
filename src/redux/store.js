export { store };
import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import carReducer from "./cars/reducers";
import { filterReducer } from "./filter/filterSlice";

const persistConfig = {
  key: "cars",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, carReducer);

const store = configureStore({
  reducer: {
    cars: persistedReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
