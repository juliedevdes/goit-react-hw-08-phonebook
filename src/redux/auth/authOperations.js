import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// export async function signUp({ name, email, password }) {
//   const { data } = await axios.post("users/signup", { name, email, password });
//   return data;
// }

// export async function logIn({ email, password }) {
//   const { data } = await axios.post("users/login", { email, password });
//   return data;
// }

// export async function logOut(token) {
//   const { data } = await axios.post("users/logout", token);
//   return data;
// }

// export async function getCurrUserInfo(token) {
//   const { data } = await axios.get("users/current", token);
//   return data;
// }

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credentials) => {
  // try
  const { data } = await axios.post("/users/signup", credentials);
  token.set(data.token);
  return data;
  // } catch (error) {
  //  console.log(error);
  // }
});

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  const { data } = await axios.post("/users/login", credentials);
  token.set(data.token);
  return data;
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    console.log(error);
  }
});
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authOperations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};

export default authOperations;
