import React, { Component } from 'react';
import { StyledAccountsList } from '../styled/styledAccountsList';
import * as api from '../utils/api';
import AccountsCard from './accountsCard';
import { Link } from 'react-router-dom';

export default class AccountsList extends Component {
  state = {
    accounts: []
  };
  componentDidMount() {
    api.getAccounts().then((accounts) => {
      this.setState({ accounts });
    });
  }

  render() {
    const { accounts } = this.state;
    console.log(accounts);
    return (
      <StyledAccountsList>
        <Link to="/">Submit Readings</Link>
        <ul>
          {accounts.map(({ account_id, email, first_name, surname }) => {
            return (
              <AccountsCard
                account_id={account_id}
                email={email}
                first_name={first_name}
                surname={surname}
                key={account_id}
              />
            );
          })}
        </ul>
      </StyledAccountsList>
    );
  }
}
