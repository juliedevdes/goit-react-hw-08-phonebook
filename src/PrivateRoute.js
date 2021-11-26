import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { authSelectors } from "./redux/auth";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
}
