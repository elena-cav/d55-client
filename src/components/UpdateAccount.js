import React, { Component } from 'react';
import * as api from '../utils/api';
import { StyledCard } from '../styled/styledCard';
import My404Component from './My404Component';
export default class UpdateAccount extends Component {
  constructor(props) {
    super(props);
    const { state } = props.location;
    let first_name, surname, email;
    if (state) {
      first_name = state.first_name;
      surname = state.surname;
      email = state.email;
    }

    const { account_id } = props.match.params;
    this.state = {
      first_name,
      surname,
      email,
      account_id,
      successMessage: ''
    };
  }

  handleInput = (event) => {
    const { first_name, surname, email, account_id } = this.state;
    event.preventDefault();
    api.patchAccount({ first_name, surname, email }, account_id).then(() => {
      this.setState({ successMessage: 'Account successfully updated' });
    });
  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.id;
    this.setState({ [key]: value });
  };

  render() {
    const { first_name, surname, email, successMessage } = this.state;
    if (!first_name && !surname && !email)
      return <My404Component page="account" />;
    return (
      <StyledCard>
        <form className="form" onSubmit={this.handleInput}>
          <label>
            Name
            <input
              type="text"
              id="first_name"
              onChange={this.handleChange}
              value={first_name}
            />
          </label>
          <label>
            Surname
            <input
              type="text"
              id="surname"
              onChange={this.handleChange}
              value={surname}
            ></input>
          </label>
          <label>
            Email
            <input
              type="text"
              id="email"
              onChange={this.handleChange}
              value={email}
            ></input>
          </label>
          <button>Submit</button>
        </form>
        <h3>{successMessage}</h3>
      </StyledCard>
    );
  }
}
