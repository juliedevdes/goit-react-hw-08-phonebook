import ContacsForm from "./components/ContacsForm/ContacsForm";
import ContasctsList from "./components/ContactList/ContactsList";
import Filter from "./components/Filter/Filter";

import s from "./App.module.css";

export default function App() {
  return (
    <div className={s.root}>
      <h2>Phonebook</h2>
      <ContacsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContasctsList />
    </div>
  );
}
