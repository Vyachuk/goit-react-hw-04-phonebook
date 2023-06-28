import PropTypes from 'prop-types';
import {
  ContactButton,
  ContactHumanList,
  ContactItem,
} from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactHumanList>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactButton
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactHumanList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
