import { /*lazy,*/ Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView/HomeView";
import RegisterView from "./views/RegisterView/RegisterView";
import LoginView from "./views/LoginView/LoginView";
import Loader from "./components/Loader/Loader";

import s from "./App.module.css";
import ContactsView from "./views/ContactsView/ContactsView";

export default function App() {
  return (
    <div className={s.root}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactsView />} />
        </Routes>
      </Suspense>
    </div>
  );
}
