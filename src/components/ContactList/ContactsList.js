import ContasctsListItem from "../ContactsListItem/ContactsListItem";
import s from "./ContactsList.module.css";

import { useSelector } from "react-redux";

function ContasctsList() {
  const getVisibleContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const contacts = useSelector((state) =>
    getVisibleContacts(state.contacts.entities, state.filter)
  );

  //const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map((contact) => {
        return (
          <li className={s.item} key={contact.id}>
            <ContasctsListItem
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContasctsList;
