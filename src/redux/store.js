import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // використовує LocalStorage як сховище за замовчуванням
import carReducer from "./cars/reducers";

// Конфігурація persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"], // тільки favorites буде збережено у LocalStorage
};

const persistedReducer = persistReducer(persistConfig, carReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
