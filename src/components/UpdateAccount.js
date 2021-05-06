import React, { Component } from 'react';
import * as api from '../utils/api';
import { StyledCard } from '../styled/styledCard';
export default class UpdateAccount extends Component {
  constructor(props) {
    super(props);
    const { state } = props.location;
    const { first_name, surname, email } = state;
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
