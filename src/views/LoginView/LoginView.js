import { useState } from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        email:
        <input
          placeholder="example@mail.com"
          name="email"
          onChange={handleInputChange}
          value={email}
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
      <button type="submit">login</button>
    </form>
  );
}
