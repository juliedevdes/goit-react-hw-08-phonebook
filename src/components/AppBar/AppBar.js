import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
/* <NavLink exact className={s.link} activeClassName={s.active} to="/">
        Home
      </NavLink> */

import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <NavLink style={{ margin: "10px" }} to="/">
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          style={{ margin: "10px", marginRight: "150px" }}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}

      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div>
          <NavLink style={{ margin: "10px" }} to="/register">
            Register
          </NavLink>
          <NavLink style={{ margin: "10px", marginRight: "150px" }} to="/login">
            Login
          </NavLink>
        </div>
      )}
    </div>
  );
}
