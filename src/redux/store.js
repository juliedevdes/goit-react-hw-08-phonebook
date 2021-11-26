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
import { authReducer } from "./auth";

const contactsPersistConfig = {
  key: "contacts",
  storage,
};

const authPersistConfig = {
  key: "contacts",
  storage,
};

const filterReducer = createReducer("", {
  [handleFilter]: (_, { payload }) => `${payload}`,
});

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    filter: filterReducer,
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  //devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export default store;
