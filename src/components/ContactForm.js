import React, { Component } from 'react';
import s from './Styles.module.css';


 const INITIAL_STATE = {
  name: '',
  number: '',
};

class Form extends Component {
  state = { ...INITIAL_STATE };


handleChange = (event) => {
    const {name, value} = event.target
  this.setState({
    [name]: value
  });
  };

    handleSubmit = (event) => {
    event.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    
    reset = () => {
        this.setState({ ...INITIAL_STATE });
    }
   
    render() {
    return (
      <div>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.text} htmlFor='name'>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              placeholder="Your name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
           <label  className={s.text} >
          Number
            <input
               className={s.input}
            type="tel"
              name="number"
              placeholder="+38-000-000-00-00"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            />
            </label>
        <button className={s.button} type="submit">Add contact</button>
            </form>
      </div>
    );
  };
};

export default Form;