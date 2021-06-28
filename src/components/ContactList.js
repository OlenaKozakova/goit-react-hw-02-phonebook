
const ContactList = ({filteredContact, onDeleteContact}) => (
      <div>
        <ul>
      {filteredContact.map(({ id, name, number }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button
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