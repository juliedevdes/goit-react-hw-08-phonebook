import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import "material-design-icons/iconfont/material-icons.css";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/Material.css";
import {
  /*notice, info, error, */ alert,
  success,
  defaults,
} from "@pnotify/core";

defaults.styling = "material";
defaults.icons = "material";
defaults.delay = 1000;
defaults.animation = "fade";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      success({
        title: "Thanks! Your account has been successfully created",
        text: "Registration is completed",
        type: "success",
      });
      return data;
    } catch (error) {
      alert({
        type: "error",
        title: "Opps, you did something wrong!",
        text: error.message,
      });
      return thunkAPI.rejectWithValue("error");
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    success({
      title: "Login successful! ✨",
      text: "You have successfully logged in",
      type: "success",
    });
    return data;
  } catch (error) {
    alert({
      type: "error",
      title: "Opps, you did something wrong!",
      text: error.message,
    });
    return thunkAPI.rejectWithValue();
  }
});

const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("/users/logout");
    token.unset();
    return success({
      title: "Logout successful",
      text: "You have successfully logged out. See you next time!",
      type: "success",
    });
  } catch (error) {
    return alert({
      type: "error",
      title: "Opps, you did something wrong!",
      text: error.message,
    });
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("error");
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return alert({
        type: "error",
        title: "Opps, you did something wrong!",
        text: error.message,
      });
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
