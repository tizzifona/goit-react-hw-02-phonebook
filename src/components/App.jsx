import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';
class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onInputChange = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  }
  addNewContact = ({ name, number }) => {
    const { contacts } = this.state;
    const isContactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    return isContactExists
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => ({
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      }));
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  delContact = (id) => {
    const { contacts } = this.state;
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: filteredContacts });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div className={css.mainContainer}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.onInputChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.delContact} />
      </div>
    );
  }
}
export default App;
