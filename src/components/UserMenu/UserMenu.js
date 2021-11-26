import { authSelectors } from "../../redux/auth";
import { useSelector, useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const handleBtn = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div style={{ display: "flex", height: "50px" }}>
      <h4 style={{ fontSize: "12px" }}>{name}</h4>
      <button onClick={handleBtn} type="button">
        Logout
      </button>
    </div>
  );
}
