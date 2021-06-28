import React, { Component } from 'react';
import shortid from 'shortid';

import Form from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from './components/Filter';
  

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

   duplicateContactCheck = subContact => {
    const value = subContact.name.toLowerCase();
    const nameCheck = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(value),
    );

    nameCheck
      ? alert(`${nameCheck.name} is already in contacts`)
      : this.addContact(subContact);
  };
  
  addContact = newContact => {
    const contact = {
      id: shortid.generate(),
      ...newContact,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  formSubmitContacts = data => {
    console.log(data);
  };
   
  onChangeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  filterContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

   deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    // eslint-disable-next-line no-lone-blocks
    const filteredContact = this.filterContact(); {
      return (
        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.duplicateContactCheck} />
          <h2>Contacts</h2>
          <Filter onChangeFilter={this.onChangeFilter} value={filter} />
          <ContactList filteredContact={filteredContact}
            onDeleteContact={this.deleteContact}
          />
        </div>
      );
    };
  };
}

export default App;
