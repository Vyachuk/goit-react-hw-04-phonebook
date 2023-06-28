import PropTypes from 'prop-types';
import { ContactWrap } from './ContactsSerchField.styled';

export const ContactsSerchField = ({ value, onInfoChange }) => {
  return (
    <ContactWrap>
      <span>Find contacts by name</span>
      <input type="text" name="filter" onChange={onInfoChange} value={value} />
    </ContactWrap>
  );
};

ContactsSerchField.propTypes = {
  value: PropTypes.string,
};
