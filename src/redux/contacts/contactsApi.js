import axios from "axios";

import "material-design-icons/iconfont/material-icons.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/Material.css";
import { alert, defaults } from "@pnotify/core";

//pnotify default settings
defaults.styling = "material";
defaults.icons = "material";
defaults.delay = 1000;
defaults.animation = "fade";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export async function fetchContacts() {
  try {
    const { data } = await axios.get("/contacts");
    return data;
  } catch (error) {
    return alert({
      type: "error",
      title: "Opps, you did something wrong!",
      text: error.message,
    });
  }
}

export async function postContact({ name, number }) {
  try {
    const { data } = await axios.post("/contacts", { name, number });
    return data;
  } catch (error) {
    return alert({
      type: "error",
      title: "Opps, you did something wrong!",
      text: error.message,
    });
  }
}

export async function deleteContact(id) {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {
    return alert({
      type: "error",
      title: "Opps, you did something wrong!",
      text: error.message,
    });
  }
}
