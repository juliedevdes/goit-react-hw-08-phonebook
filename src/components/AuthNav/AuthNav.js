import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <NavLink style={{ marginRight: "20px" }} to="/register">
        Register
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
