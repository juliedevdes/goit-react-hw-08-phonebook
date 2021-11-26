import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const contacts = useSelector((store) => store.contacts.entities);

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
        email:
        <input
          placeholder="example@mail.com"
          name="email"
          onChange={handleInputChange}
          value={email}
          type="mail"
          required
        />
      </label>
      <label>
        password:
        <input
          name="password"
          onChange={handleInputChange}
          value={password}
          type="text"
          required
        />
      </label>
      <button type="submit">register</button>
    </form>
  );
}
