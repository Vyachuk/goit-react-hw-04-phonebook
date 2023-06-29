import { useEffect, useState } from 'react';
import { Wrapper } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactSection } from './ContactSection/ContactSection';
import { ContactsSerchField } from './ContactsSerchField/ContactsSerchField';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { load } from '../services/locale-storage';
const myState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => load('contactList') || myState
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    contacts.length > 0
      ? localStorage.setItem('contactList', JSON.stringify(contacts))
      : localStorage.removeItem('contactList');
  }, [contacts]);

  const onAddContact = ({ name, number }) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    isExist
      ? alert(`${name} is already in contacts`)
      : setContacts(prev => [
          ...prev,
          {
            id: crypto.randomUUID(),
            name,
            number,
          },
        ]);
  };
  const getContactsFiltered = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const handleInfoChange = e => {
    setFilter(e.target.value);
  };

  const filteredData = getContactsFiltered();
  return (
    <Wrapper>
      <PhoneBookForm addContact={onAddContact} />
      <ContactSection>
        <ContactsSerchField value={filter} onInfoChange={handleInfoChange} />
        <ContactList
          contacts={filteredData}
          deleteContact={handleDeleteContact}
        />
      </ContactSection>
    </Wrapper>
  );
};
