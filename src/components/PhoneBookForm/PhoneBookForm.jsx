import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, FormTitle } from './PhoneBookForm.styled';

export class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInfoChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <FormTitle>Phonebook</FormTitle>
        <Form>
          <span>Name:</span>
          <input
            type="text"
            value={this.state.name}
            onChange={this.onInfoChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <span>Number:</span>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onInfoChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button onClick={this.onSubmit} type="submit">
            Add contact
          </button>
        </Form>
      </>
    );
  }
}

PhoneBookForm.propTypes = {
  nameField: PropTypes.string,
  numberField: PropTypes.string,
};
