import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsAPI from "./contactsApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await contactsAPI.deleteContact(id);
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
);

export const postContact = createAsyncThunk(
  "contacts/postContact",
  async (contact) => {
    await contactsAPI.postContact(contact);
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
);
