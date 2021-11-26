import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <h2>
      {isLoggedIn
        ? "Hello! You can use your phonebook now 😉"
        : "Hello, it's home page. You need to register or login to use phonebook 🙈"}
    </h2>
  );
}
