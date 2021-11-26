import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
/* <NavLink exact className={s.link} activeClassName={s.active} to="/">
        Home
      </NavLink> */

export default function AppBar() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <NavLink style={{ margin: "10px" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ margin: "10px", marginRight: "150px" }} to="/contacts">
        Contacts
      </NavLink>
      <NavLink style={{ margin: "10px" }} to="/register">
        Register
      </NavLink>
      <NavLink style={{ margin: "10px", marginRight: "150px" }} to="/login">
        Login
      </NavLink>
      <h2 style={{ margin: "10px" }}>
        <UserMenu />
      </h2>
    </div>
  );
}
