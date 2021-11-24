import axios from "axios";

axios.defaults.baseURL =
  "https://619642c1af46280017e7df3d.mockapi.io/phonebook/";

export async function fetchContacts() {
  const { data } = await axios.get("contacts");
  return data;
}

export async function postContact({ name, number }) {
  const { data } = await axios.post("contacts", { name, number });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
}
