import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contacts/contactsOperations";

import s from "./ContactsListItem.module.css";

function ContasctsListItem({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <div>
      <span className={s.name}> {name}</span>
      <span className={s.num}> {number}</span>
      <button
        className={s.btn}
        name={name}
        onClick={() => dispatch(deleteContact(id))}
      >
        delete
      </button>
    </div>
  );
}

ContasctsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContasctsListItem;
