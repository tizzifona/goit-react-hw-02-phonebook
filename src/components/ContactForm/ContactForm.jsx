import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    return ( <>
      <form
        className={css.contactForm}
        onSubmit={e => {
          e.preventDefault();
          this.props.addContact(this.state);
          this.resetForm();
        }}
      >
        <label className={css.contactLabel}>
          Name
          <br />
          <input
            className={css.contactInput}
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={css.contactLabel}>
          Number
          <br />
          <input
            className={css.contactInput}
            onChange={this.handleChange}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button className={css.contactButton} type="submit">
          Add contact
        </button>
      </form>
      </>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired
}

export default ContactForm;
