import { configureStore, createReducer } from "@reduxjs/toolkit";
import { handleFilter } from "./actions";
import contactsReducer from "./contacts/contactsReducer";

const filterReducer = createReducer("", {
  [handleFilter]: (_, { payload }) => `${payload}`,
});

const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
