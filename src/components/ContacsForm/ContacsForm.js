import { useState } from "react";
import s from "./ContactForm.module.css";

import { useDispatch, useSelector } from "react-redux";

import { postContact } from "../../redux/contacts/contactsOperations";

function ContacsForm() {
  const [name, setName] = useState("");
  const [number, setNum] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector((store) => store.contacts.entities);

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNum(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.some((el) => el.name === name)) {
      alert("There is already contact with the same name");
      return;
    }

    dispatch(
      postContact({
        name,
        number,
      })
    );
    reset();
  };

  const reset = () => {
    setNum("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name:
        <input
          className={s.inputName}
          placeholder="Jane Wayeet"
          name="name"
          onChange={handleInputChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
          required
        />
      </label>
      <label className={s.labelNum}>
        number:
        <input
          className={s.inputNum}
          placeholder="+ 00-000-00"
          name="number"
          onChange={handleInputChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          type="tel"
          required
        />
      </label>
      <button className={s.btn} type="submit">
        add contact
      </button>
    </form>
  );
}

export default ContacsForm;
