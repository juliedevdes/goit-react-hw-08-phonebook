import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import s from "./RegisterView.module.css";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.label} style={{ marginRight: "20px" }}>
        name:
        <input
          className={s.input}
          placeholder="Jane"
          name="name"
          onChange={handleInputChange}
          value={name}
          type="text"
          required
        />
      </label>
      <label className={s.label} style={{ marginRight: "20px" }}>
        email:
        <input
          className={s.input}
          placeholder="example@mail.com"
          name="email"
          onChange={handleInputChange}
          value={email}
          type="mail"
          required
        />
      </label>
      <label className={s.label}>
        password:
        <input
          className={s.input}
          placeholder="*at least 8 symbols"
          name="password"
          onChange={handleInputChange}
          value={password}
          type="text"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        sign up
      </button>
    </form>
  );
}
