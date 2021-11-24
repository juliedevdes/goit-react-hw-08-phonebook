import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  fetchContacts,
  postContact,
  deleteContact,
} from "./contactsOperations";

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [postContact.fulfilled]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.rejected]: () => false,
  [fetchContacts.fulfilled]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
});

export default combineReducers({ entities, isLoading, error });
