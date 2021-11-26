import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";

export default function LoginView() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
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
    dispatch(authOperations.logIn({ name, password }));
    reset();
  };

  const reset = () => {
    setName("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input
          placeholder="Jane"
          name="name"
          onChange={handleInputChange}
          value={name}
          type="text"
          required
        />
      </label>
      <label>
        password:
        <input
          name="password"
          onChange={handleInputChange}
          value={password}
          required
        />
      </label>
      <button type="submit">register</button>
    </form>
  );
}
