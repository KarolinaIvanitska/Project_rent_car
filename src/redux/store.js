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
import { carReducer } from "./cars/carSlice";
import { filterReducer } from "./filter/filterSlice";

const persistConfig = {
  key: "cars",
  version: 1,
  storage,
  whiteList: ["token"],
};
const persistedReducer = persistReducer(persistConfig, carReducer);
export const store = configureStore({
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
