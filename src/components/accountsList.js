import React, { Component } from 'react';
import { StyledList } from '../styled/styledList';
import * as api from '../utils/api';
import AccountsCard from './accountsCard';
import { Ring } from 'react-awesome-spinners';

export default class AccountsList extends Component {
  state = {
    accounts: [],
    isLoading: true
  };
  componentDidMount() {
    api.getAccounts().then((accounts) => {
      this.setState({ accounts, isLoading: false });
    });
  }

  render() {
    const { accounts, isLoading } = this.state;
    console.log(accounts);
    if (isLoading)
      return (
        <div className="ring">
          <Ring />
        </div>
      );
    return (
      <StyledList>
        <ul>
          <h1>Accounts</h1>
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
      </StyledList>
    );
  }
}
