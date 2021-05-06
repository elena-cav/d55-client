import React, { Component } from 'react';
import { StyledCard } from '../styled/styledCard';
export default class AccountsCard extends Component {
  render() {
    const { first_name, email, surname, account_id } = this.props;
    return (
      <StyledCard>
        <p>
          {first_name} {surname}
        </p>
        <p>Email: {email}</p>
        <p>Account ID: {account_id}</p>
      </StyledCard>
    );
  }
}
