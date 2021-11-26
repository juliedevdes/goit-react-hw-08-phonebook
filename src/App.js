import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import s from "./App.module.css";

import { authOperations } from "./redux/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";

const HomeView = lazy(() =>
  import("./views/HomeView/HomeView" /*webpackChunkName: "home-view"*/)
);
const RegisterView = lazy(() =>
  import(
    "./views/RegisterView/RegisterView" /*webpackChunkName: "register-view"*/
  )
);
const LoginView = lazy(() =>
  import("./views/LoginView/LoginView" /*webpackChunkName: "login-view"*/)
);
const ContactsView = lazy(() =>
  import(
    "./views/ContactsView/ContactsView" /*webpackChunkName: "contacts-view"*/
  )
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div className={s.root}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route element={<h1>Error</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
}
