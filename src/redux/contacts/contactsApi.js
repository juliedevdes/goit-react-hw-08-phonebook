import axios from "axios";

import "material-design-icons/iconfont/material-icons.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/Material.css";
import { alert, defaults } from "@pnotify/core";

defaults.styling = "material";
defaults.icons = "material";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export async function fetchContacts() {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {
    return alert({
      delay: 300,
      type: "error",
      text: error.message,
      animation: "fade",
    });
  }
}

export async function postContact({ name, number }) {
  try {
    const { data } = await axios.post("/contacts", { name, number });
    return data;
  } catch (error) {
    return alert({
      delay: 300,
      type: "error",
      text: error.message,
      animation: "fade",
    });
  }
}

export async function deleteContact(id) {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    return alert({
      delay: 300,
      type: "error",
      text: error.message,
      animation: "fade",
    });
  }
}
