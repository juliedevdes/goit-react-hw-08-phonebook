import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

import s from "./AppBar.module.css";
import "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={s.appbar}>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
