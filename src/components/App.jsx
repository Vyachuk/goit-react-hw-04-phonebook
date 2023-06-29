import { Component } from 'react';
import { Wrapper } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactSection } from './ContactSection/ContactSection';
import { ContactsSerchField } from './ContactsSerchField/ContactsSerchField';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { save, load } from '../services/locale-storage';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contactStorage = load('contactList');
    if (contactStorage) {
      this.setState({ contacts: contactStorage });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      save('contactList', contacts);
    }
  }

  onAddContact = ({ name, number }) => {
    const { contacts } = this.state;
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    isExist
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [
            ...prevState.contacts,
            {
              id: crypto.randomUUID(),
              name,
              number,
            },
          ],
        }));
  };
  getContactsFiltered = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleInfoChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  render() {
    const { filter } = this.state;
    const filteredData = this.getContactsFiltered();
    return (
      <Wrapper>
        <PhoneBookForm addContact={this.onAddContact} />
        <ContactSection>
          <ContactsSerchField
            value={filter}
            onInfoChange={this.handleInfoChange}
          />
          <ContactList
            contacts={filteredData}
            deleteContact={this.handleDeleteContact}
          />
        </ContactSection>
      </Wrapper>
    );
  }
}
