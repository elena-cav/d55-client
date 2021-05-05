import React, { Component } from 'react';
import StyledAccount from '../styled/styledAccount';
export default class AccountsCard extends Component {
  render() {
    const { first_name, email, surname, account_id } = this.props;
    return (
      <StyledAccount>
        <p>{first_name}</p>
        <p>{surname}</p>
        <p>{email}</p>
        <p>{account_id}</p>
      </StyledAccount>
    );
  }
}
