import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink style={{ margin: "10px" }} to="/register">
        Register
      </NavLink>
      <NavLink style={{ margin: "10px", marginRight: "150px" }} to="/login">
        Login
      </NavLink>
    </div>
  );
}
