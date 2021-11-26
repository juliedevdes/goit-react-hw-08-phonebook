import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import { authOperations } from "./redux/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import AppBar from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

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
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute path="/">
                <HomeView />
              </PublicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PublicRoute path="/register" restricted>
                <RegisterView />
              </PublicRoute>
            }
          />

          <Route
            path="/login"
            element={
              <PublicRoute path="/login" restricted>
                <LoginView />
              </PublicRoute>
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute path="/contacts">
                <ContactsView />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<h1>Error! Missing page 🤭</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
}
