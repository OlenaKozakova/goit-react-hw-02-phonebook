import s from './Styles.module.css';

const ContactList = ({filteredContact, onDeleteContact}) => (
      <div className={s.contact_container}>
        <ul className={s.contact_form}>
      {filteredContact.map(({ id, name, number }) => (
        <li className={s.contactlist} key={id}>
          <p className={s.text}>{name}</p>
          <p className={s.text}>{number}</p>
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>))}
        </ul>
      </div>
    );


export default ContactList;