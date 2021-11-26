import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);

  return (
    <div style={{ display: "flex", height: "50px" }}>
      <h4 style={{ fontSize: "12px" }}>{name}</h4>
      <button>Logout</button>
    </div>
  );
}
