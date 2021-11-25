import { configureStore, createReducer } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
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
import { handleFilter } from "./actions";
import contactsReducer from "./contacts/contactsReducer";

const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const filterReducer = createReducer("", {
  [handleFilter]: (_, { payload }) => `${payload}`,
});

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export default store;
