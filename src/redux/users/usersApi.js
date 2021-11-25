import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/"; //??????

export async function signUp({ name, email, password }) {
  const { data } = await axios.post("users/signup", { name, email, password });
  return data;
}

export async function logIn({ email, password }) {
  const { data } = await axios.post("users/login", { email, password });
  return data;
}

export async function logOut(token) {
  const { data } = await axios.post("users/logout", token);
  return data;
}

export async function getCurrUserInfo(token) {
  const { data } = await axios.get("users/current", token);
  return data;
}
