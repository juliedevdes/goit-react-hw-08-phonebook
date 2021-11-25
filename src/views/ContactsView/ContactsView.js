import ContacsForm from "../../components/ContacsForm/ContacsForm";
import ContasctsList from "../../components/ContactList/ContactsList";
import Filter from "../../components/Filter/Filter";

export default function ContactsView() {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContacsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContasctsList />
    </div>
  );
}
