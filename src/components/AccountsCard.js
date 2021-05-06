import React, { Component } from 'react';
import { StyledCard } from '../styled/styledCard';
import { Link } from 'react-router-dom';
export default class AccountsCard extends Component {
  render() {
    const { first_name, email, surname, account_id } = this.props;

    return (
      <StyledCard>
        <div className="card">
          <p>
            {first_name} {surname}
          </p>
          <p>Email: {email}</p>
          <p>Account ID: {account_id}</p>
          <Link
            className="editBtn"
            to={{
              pathname: `accounts/${account_id}`,
              state: { first_name, email, surname }
            }}
          >
            Edit Account
          </Link>
        </div>
      </StyledCard>
    );
  }
}
