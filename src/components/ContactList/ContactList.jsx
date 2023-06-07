import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import Contact from './icons/contacts.png';
import Delete from './icons/delete.png';
const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li className={css.contactItem} key={id}>
        <img src={Contact} alt="Contact Icon" className={css.contactIcon} />
        <p className={css.contactName} >{name}:</p>
        <p className={css.contactNumber}>{number}</p>
        <button
          className={css.contactButton}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          <img src={Delete} alt="Delete Icon" className={css.deleteIcon} />
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf
  (PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
