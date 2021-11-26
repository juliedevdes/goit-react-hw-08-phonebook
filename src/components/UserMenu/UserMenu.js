import { authSelectors } from "../../redux/auth";
import { useSelector, useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import s from "./UserMenu.module.css";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  const handleBtn = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div className={s.userMenu}>
      <h4 className={s.userName}> {`👋 ${name}`} </h4>
      <button className={s.btn} onClick={handleBtn} type="button">
        Logout
      </button>
    </div>
  );
}
